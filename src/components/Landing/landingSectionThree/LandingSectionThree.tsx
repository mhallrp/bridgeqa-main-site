const LandingSectionThree = () => {
    return (
        <div className="flex flex-col justify ">
            <h2 className="font-montserrat font-black text-2xl">
                💡 What’s Next? Automation.
            </h2>
            <p className="my-5 font-semibold">
                We’re Just Getting Started. Here’s What’s Coming Next.
            </p>
            <div className="flex flex-col lg:flex-row w-full gap-5 text-light">
                <div className="relative p-[2px] mt-4 rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
                    <p className="bg-white h-full rounded-md p-4 text-[#1E1E1E]">
                    ✅ <span className="font-semibold">Slack, Jira & GitHub Integrations:</span> Sync feedback instantly. No more lost messages. BridgeQA will send flagged issues straight to your dev’s workflow.
                    </p>
                </div>
                <div className="relative p-[2px] mt-4 rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
                    <p className="h-full bg-white rounded-md p-4 text-[#1E1E1E]">
                    🤖 <span className="font-semibold">Automated Issue Detection:</span> AI-powered scanning will detect inconsistencies between your Figma designs and live site, before you even need to look.
                    </p>
                </div>
                <div className="relative p-[2px] mt-4 rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
                    <p className="bg-white h-full rounded-md p-4 text-[#1E1E1E]">
                    🔍 <span className="font-semibold">Live Figma Specs & Insights:</span> No more guessing. Select any element on your live site and BridgeQA will fetch real-time specs from the original Figma file.
                    </p>
                </div>
                <div className="relative p-[2px] mt-4 rounded-lg bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF]">
                    <p className="bg-white h-full rounded-md p-4 text-[#1E1E1E]">
                    🚀 <span className="font-semibold">Smarter, Faster QA:</span> We’re evolving from a manual comparison tool into a fully smart and automated design-to-development QA assistant.                    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingSectionThree;