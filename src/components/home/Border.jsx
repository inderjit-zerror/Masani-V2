const Border = () => {
    return (
        <div className="w-[96%] h-[94%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <img src="/images/BorderTL.svg" alt="BORDERIMG" className=" absolute  top-0 sm:top-3 left-2 w-[15%]" />
            <img src="/images/BorderBL.svg" alt="BORDERIMG" className=" absolute left-3 bottom-0 sm:bottom-2 w-[15%]" />
            <img src="/images/BorderTR.svg" alt="BORDERIMG" className=" absolute top-0 sm:top-3 right-2 w-[15%]" />
            <img src="/images/BorderBR.svg" alt="BORDERIMG" className=" absolute right-3 bottom-0 sm:bottom-2 w-[15%]" />


            {/* BOTTOM */}
            <div className=" w-[60%] sm:w-[67%] h-fit absolute bottom-0 sm:bottom-[5%] left-1/2 flex flex-col gap-0.5 sm:gap-1 justify-center items-center -translate-x-1/2">
                <div className="h-[1px] sm:h-[2px] w-full bg-[#B7B7B8]" />
                <div className="h-[1px] sm:h-[2px] w-[97%] bg-[#B7B7B8]" />
                <div className="h-[1px] sm:h-[2px] w-full bg-[#B7B7B8]" />
            </div>

            {/* TOP */}
            <div className="w-[60%] sm:w-[67%] h-fit absolute top-0 sm:top-[5%] left-1/2 flex flex-col gap-0.5 sm:gap-1 justify-center items-center -translate-x-1/2">
                <div className="h-[1px] sm:h-[2px] w-full bg-[#B7B7B8]" />
                <div className="h-[1px] sm:h-[2px] w-[97%] bg-[#B7B7B8]" />
                <div className="h-[1px] sm:h-[2px] w-full bg-[#B7B7B8]" />
            </div>

            {/* LEFT */}
            <div className="w-fit h-[80%] sm:h-[40%] absolute top-1/2 left-2 sm:left-5 flex  gap-0.5 sm:gap-1 justify-center items-center -translate-y-1/2">
                <div className="w-[1px] sm:w-[2px] h-full bg-[#B7B7B8]" />
                <div className="w-[1px] sm:w-[2px] h-[97%] bg-[#B7B7B8]" />
                <div className="w-[1px] sm:w-[2px] h-full bg-[#B7B7B8]" />
            </div>

            {/* RIGHT */}
            <div className="w-fit h-[80%] sm:h-[40%] absolute top-1/2 right-2 sm:right-5 flex  gap-0.5 sm:gap-1 justify-center items-center -translate-y-1/2">
                <div className="w-[1px] sm:w-[2px] h-full bg-[#B7B7B8]" />
                <div className="w-[1px] sm:w-[2px] h-[97%] bg-[#B7B7B8]" />
                <div className="w-[1px] sm:w-[2px] h-full bg-[#B7B7B8]" />
            </div>

        </div>
    )
}

export default Border