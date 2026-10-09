import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sheets, auth as sheetsAuth } from "@googleapis/sheets";

export async function POST(req) {
    try {
        const body = await req.json();
        const { membersData } = body;

        if (!membersData || !Array.isArray(membersData) || membersData.length === 0) {
            return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
        }

        // 1. Send Email using Nodemailer
        let emailSent = false;
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.NEXT_PUBLIC_EMAIL_USER,
                    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
                },
            });

            const emailText = membersData.map((m, i) => `Person ${i + 1}:\n- Name: ${m.name}\n- Attendance: ${m.attendance}\n- Meal: ${m.attendance === "DELIGHTED TO ACCEPT" ? m.meal : "N/A"}`).join("\n\n");

            const mailOptions = {
                from: process.env.NEXT_PUBLIC_EMAIL_USER,
                to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
                subject: "New RSVP Submission - NAVJOTE Ceremony",
                text: `A new RSVP has been received:\n\n${emailText}`,
            };

            await transporter.sendMail(mailOptions);
            emailSent = true;
        } catch (emailError) {
            console.error("Email Error:", emailError);
            // Non-fatal, we can still try to save to Google Sheets
        }

        // 2. Add to Google Sheets
        let sheetsUpdated = false;
        try {
            const auth = new sheetsAuth.GoogleAuth({
                credentials: {
                    client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
                },
                scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            });

            const sheetsApi = sheets({ version: "v4", auth });

            const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
            const rows = membersData.map((m) => [
                timestamp,
                m.name,
                m.attendance,
                m.attendance === "DELIGHTED TO ACCEPT" ? m.meal : "N/A"
            ]);

            await sheetsApi.spreadsheets.values.append({
                spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
                range: "Sheet1!A:D", // Change if your sheet is named differently
                valueInputOption: "USER_ENTERED",
                requestBody: {
                    values: rows,
                },
            });
            sheetsUpdated = true;
        } catch (sheetsError) {
            console.error("Google Sheets Error:", sheetsError);
            if (!emailSent) {
                // If both failed, return an error
                throw new Error("Both email and sheets integration failed");
            }
        }

        return NextResponse.json({ success: true, emailSent, sheetsUpdated }, { status: 200 });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Failed to process RSVP" }, { status: 500 });
    }
}
