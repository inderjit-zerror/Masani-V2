import Border from "./Border";

const WhiteBG = () => {
    return (
        <>
            <div className="w-full h-full overflow-hidden relative grid grid-cols-1 grid-rows-2 ">
                <div className="w-full h-full relative overflow-hidden">
                    <img src="/images/WhiteBG.svg" alt="BGIMG" className=" absolute top-0 left-0 w-full " />
                </div>
                <div className="w-full h-full relative overflow-hidden">
                    <img src="/images/WhiteBG.svg" alt="BGIMG" className=" absolute bottom-0 left-0 w-full " />
                </div>

                <div className=" w-full h-[50vh] bg-white sm:hidden absolute top-1/2 left-0 -translate-y-1/2 border-x border-black">

                </div>

                <Border />

            </div>
        </>
    )
}

export default WhiteBG;