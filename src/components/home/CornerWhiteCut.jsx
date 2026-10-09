const CornerWhiteCut = () => {
    return (
        <>
            <div className="w-[150px] max-sm:w-[90px] h-[6%] max-sm:h-[4%] bg-white absolute top-0 -left-[65px] -rotate-40 z-10" />
            <div className="w-[150px] max-sm:w-[90px] h-[6%] max-sm:h-[4%] bg-white absolute top-0 -right-[65px] rotate-40 z-10" />
            <div className="w-[150px] max-sm:w-[90px] h-[6%] max-sm:h-[4%] bg-white absolute bottom-0 -right-[65px] -rotate-40 z-10" />
            <div className="w-[150px] max-sm:w-[90px] h-[6%] max-sm:h-[4%] bg-white absolute bottom-0 -left-[65px] rotate-40 z-10" />
        </>
    )
}

export default CornerWhiteCut