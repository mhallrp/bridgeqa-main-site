import Image from "next/image";

const HowHeader = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:py-24 justify-between items-center">
            <div className="flex flex-col lg:w-[38.65%] h-full">
                <span className="px-4 py-2 text-white font-bold text-sm bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg w-auto self-start">
                    How it works
                </span>
                <h1 className="font-montserrat font-black text-4xl my-4 ">
                    Say <span className="bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF] bg-clip-text text-transparent">Goodbye to Manual QA</span> Hassles
                </h1>
                <p className="text-light font-semibold">
                    BridgeQA helps teams instantly compare Figma designs with live websites and track issues directly in their workflow. No more switching between tools, taking screenshots, or losing feedback in Slack messages.
                </p>
            </div>
            <div className="flex sm:w-[53.45%] h-full">
                <Image src="/landingImageThree.webp" alt="icon" className="w-full h-full object-cover" width={0} height={0} sizes="100vw" priority/>
            </div>
        </div>
    )
}

export default HowHeader;