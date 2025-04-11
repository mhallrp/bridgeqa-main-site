import Image from "next/image";

const LandingSectionOne = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-0 justify-between h-full">
            <div className="flex flex-col w-full lg:w-[37.83%] h-full">
                <h2 className="text-2xl font-montserrat font-black">
                    🚨 Design QA is Broken. Let’s Fix It.
                </h2>
                <p className="text-light leading-6 my-4">
                    You’re not just building designs. You’re building experiences. But when dev builds go live, the process is frustrating.
                </p>
                <div className="flex text-light flex-col sm:flex-row  gap-5">
                    <p className="border border-1 border-[#E8E8E8] rounded p-4">
                        🫣 Fonts, spacing and layouts <span className="font-bold">break</span>
                    </p>
                    <p className="border border-1 border-[#E8E8E8] rounded p-4">
                        🥵 <span className="font-bold">Manual</span> screenshot comparisons
                    </p>
                    <p className="border border-1 border-[#E8E8E8] rounded p-4">
                        😵‍💫 Feedback gets <span className="font-bold">lost</span> in Slack, Jira...
                    </p>
                </div>
                <div className="relative p-[2px] mt-4 rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
                    <p className="bg-white rounded-md p-4 font-semibold text-[#1E1E1E]">
                        BridgeQA eliminates the guesswork by letting you instantly compare Figma with your live site, flag issues, and track fixes all inside your browser.
                    </p>
                </div>
            </div>
            <div className="flex lg:w-[56.91%] h-full">
                <Image src="/landingImage.png" alt="icon" className="w-full h-full object-cover" width={0} height={0} sizes="100vw"/>
            </div>
        </div>
    )
}

export default LandingSectionOne;