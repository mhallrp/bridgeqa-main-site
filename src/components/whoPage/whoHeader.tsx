const WhoHeader = () =>{
    return (
        <div className="flex flex-row py-24 justify-between items-center">
            <div className="flex flex-col lg:w-[38.65%] h-full">
                <span className="px-4 py-2 text-white font-bold text-sm bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg w-auto self-start">
                    Who it&rsquo;s for
                </span>
                <h1 className="font-montserrat font-black text-4xl my-4 ">
                No More Guesswork.<span className="mx-1 bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF] bg-clip-text text-transparent"> Seamless Collaboration </span>Across Your Entire Team.
                </h1>
                <p className="text-light font-semibold">
                BridgeQA isn&rsquo;t just about feedback. It&rsquo;s about streamlining how teams work together.  Whether you&rsquo;re a designer, developer, or product manager, you get a faster, more efficient review process without ever leaving your workflow.
                </p>
            </div>
            <div className="flex w-[53.45%] h-full">
                <img src="/landingImageOne.png" alt="icon" className="w-full" />
            </div>
        </div>
    )
}

export default WhoHeader;