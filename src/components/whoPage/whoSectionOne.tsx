const WhoSectionOne = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center gap-12 sm:text-left text-center">

            <div className="flex flex-col gap-4 sm:w-1/3 ">
                <h2 className="font-montserrat font-black text-2xl ">
                    👩‍🎨 Designers & UX/UI Teams
                </h2>
                <p className="font-semibold">
                    Take control of the review process and say goodbye to messy screenshots, Slack threads, and endless back-and-forth. With BridgeQA, you can instantly overlay Figma designs on live websites, flag inconsistencies, and track updates, all without leaving your workflow.
                </p>
                <div className="flex flex-col gap-2.5 text-sm font-regular">
                    <p className="text-light">
                        <span className="font-bold">✅ Instant Design Overlays: </span>
                        Compare Figma designs with live builds in one click.
                    </p>
                    <p className="text-light">
                        <span className="font-bold">🖍️ Leave Feedback Where It Matters: </span>
                        Comment directly on the live page.
                    </p>
                    <p className="text-light">
                        <span className="font-bold">🔄 Track Progress Effortlessly: </span>
                        Get notified when updates are made.
                    </p>
                    <p className="text-light">
                        <span className="font-bold">🚀 No More Context Switching: </span>
                        Review, annotate, and approve, all in one place.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 sm:w-1/3">
                <h2 className="font-montserrat font-black text-2xl ">
                📊 Product Managers & QA
                </h2>
                <p className="font-semibold">
                Get real-time visibility into the design-to-development process. BridgeQA helps you track issues, streamline approvals, and ensure pixel-perfect execution, without chasing updates or losing feedback in Slack.                </p>
                <div className="flex flex-col gap-2.5 text-sm font-regular">
                    <p className="text-light font-semibold">
                        <span className="font-bold">👀 Monitor Design Accuracy: </span>
                        Ensure the live site matches the Figma specs.
                    </p>
                    <p className="text-light">
                        <span className="font-bold">📍 Track Issues in One Place: </span>
                        No more scattered Jira tickets or lost Slack messages.
                    </p>
                    <p className="text-light">
                        <span className="font-bold">📊 Measure Team Efficiency: </span>
                        See where issues arise and who’s resolving them.
                    </p>
                    <p className="text-light">
                        <span className="font-bold">🛠️ Seamless Integration: </span>
                        Sync feedback directly to Jira, GitHub, and Slack.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 sm:w-1/3">
                <h2 className="font-montserrat font-black text-2xl ">
                👨‍💻 Developers & Engineers
                </h2>
                <p className="font-semibold">
                Stop switching between tools. Build and compare simultaneously with a live Figma overlay. BridgeQA helps you spot discrepancies before they become bugs, saving you time and frustration.                </p>
                <div className="flex flex-col gap-2.5 text-sm font-regular">
                    <p className="text-light ">
                        <span className="font-bold">🔍 Real-Time Figma Overlay: </span>
                        Align your build with design without switching tabs.
                    </p>
                    <p className="text-light ">
                        <span className="font-bold">⚡ Faster Fixes, Less Back-and-Forth: </span>
                        See flagged issues instantly and resolve them inside your workflow.
                    </p>
                    <p className="text-light ">
                        <span className="font-bold">🔗 Sync with Jira, GitHub & Slack: </span>
                        Track fixes without leaving your tools.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default WhoSectionOne;