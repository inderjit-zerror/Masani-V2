'use client'
import { useState, useEffect } from 'react';


const Timer = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date("2026-12-30T00:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => {
        return num < 10 && num !== undefined ? `0${num}` : num;
    };

    const TimerBlock = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <span className="text-5xl md:text-5xl font-serif text-[#C29756]">{formatNumber(value)}</span>
            <span className="text-xs md:text-[0.8rem]  text-[#567a99] mt-2 uppercase FONT_PN font-semibold">{label}</span>
        </div>
    );

    const Separator = () => (
        <div className="flex  h-full items-center justify-center ">
            <span className="text-3xl md:text-2xl text-[#567a99] font-light my-auto">|</span>
        </div>
    );
    return (
        <>
            <div className="flex items-center gap-4 md:gap-6 ">
                <TimerBlock value={timeLeft.days} label="Days" />
                <Separator />
                <TimerBlock value={timeLeft.hours} label="Hours" />
                <Separator />
                <TimerBlock value={timeLeft.minutes} label="Minutes" />
                <Separator />
                <TimerBlock value={timeLeft.seconds} label="Seconds" />
            </div>
        </>
    )
}

export default Timer;