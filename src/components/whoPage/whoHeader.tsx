import Image from "next/image";

const WhoHeader = () => {
    return (
        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:py-24 justify-between items-center sm:text-left text-center">
            <div className="flex flex-col gap-8 sm:gap-0 lg:w-[38.65%] h-full">
                <span className="px-4 hidden sm:block py-2 text-white font-bold text-sm bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg w-auto self-start">
                    Who it&rsquo;s for
                </span>
                <h1 className="font-montserrat font-black text-4xl my-4 ">
                    No More Guesswork.<span className="mx-1 bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF] bg-clip-text text-transparent"> Seamless Collaboration </span>Across Your Entire Team.
                </h1>
                <p className="text-light font-semibold">
                    BridgeQA isn&rsquo;t just about feedback. It&rsquo;s about streamlining how teams work together.  Whether you&rsquo;re a designer, developer, or product manager, you get a faster, more efficient review process without ever leaving your workflow.
                </p>
            </div>
            <div className="flex w-full sm:w-[53.45%] h-full sm:mb-0 mb-8">
                <Image src="/landingImageTwo.webp" alt="icon" className="w-full h-full object-cover" width={0} height={0} sizes="100vw" priority/>
            </div>
        </div>
    )
}

export default WhoHeader;