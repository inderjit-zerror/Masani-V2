'use client'
import BTN from "./BTN";
import EventDetails from "./EventDetails";
import Timer from "./Timer";

const ContentCont = () => {

    return (
        <div className="content-wrapper w-[75%] h-[75%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-3 ">

            {/* LOGO-INFO */}
            <div className="w-[50px] h-fit relative overflow-hidden">
                <img src="/images/FIRE.svg" alt="FIRE" className="w-full object-cover object-center" />
            </div>

            {/* TEXT-INFO */}
            <div className="flex items-center gap-3 text-[#567a99] max-w-1/2 text-lg font-serif capitalize text-center tracking-tight leading-lg  ">
                <span>WOULD BE DELIGHTED IF YOU WOULD JOIN THEM
                    FOR THE NAVJOTE CEREMONY OF THEIR SON</span>
            </div>

            {/* Title */}
            <div className="w-1/2 h-fit flex relative ">
                <img src="/images/MainText.png" alt="IMG" className="w-full object-cover object-center" />
            </div>
            <EventDetails />

            <Timer />
            <BTN />
        </div>
    )
}

export default ContentCont;