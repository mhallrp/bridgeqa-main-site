
const LandingSectionOne = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-0 justify-between h-full">
            <div className="flex flex-col w-full lg:w-[37.83%] h-full">
                <h2 className="text-light text-2xl font-montserrat font-black">
                    🚨 Design QA is Broken. Let’s Fix It.
                </h2>

                <p className="text-light leading-6 my-4">
                    You’re not just building designs. You’re building experiences. But when dev builds go live, the process is frustrating.
                </p>

                <div className="flex text-light flex-col sm:flex-row  gap-5">
                    <p className="border border-1 border-[#E8E8E8] rounded p-4">
                        🫣 Fonts, spacing and layouts break
                    </p>
                    <p className="border border-1 border-[#E8E8E8] rounded p-4">
                        🥵 Manual screenshot comparisons
                    </p>
                    <p className="border border-1 border-[#E8E8E8] rounded p-4">
                        😵‍💫 Feedback gets lost in Slack, Jira...
                    </p>
                </div>
                <p className="border border-1 border-[#E8E8E8] text rounded p-4 mt-4 font-semibold">
                    BridgeQA eliminates the guesswork by letting you instantly compare Figma with your live site, flag issues, and track fixes all inside your browser.
                </p>

            </div>
            <div className="flex lg:w-[56.91%] h-full">
                <img src="/LandingImageOne.png" alt="icon" className="w-full" />
            </div>
        </div>
    )
}

export default LandingSectionOne;