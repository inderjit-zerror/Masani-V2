const CornerWhiteCut = () => {
    return (
        <>
            <div className="w-[150px] h-[6%] bg-white absolute top-0 -left-[65px] -rotate-40 z-10" />
            <div className="w-[150px] h-[6%] bg-white absolute top-0 -right-[65px] rotate-40 z-10" />
            <div className="w-[150px] h-[6%] bg-white absolute bottom-0 -right-[65px] -rotate-40 z-10" />
            <div className="w-[150px] h-[6%] bg-white absolute bottom-0 -left-[65px] rotate-40 z-10" />
        </>
    )
}

export default CornerWhiteCut