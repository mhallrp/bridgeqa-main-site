const LandingBannerSection = () => {
    return (
        <div className="flex flex-col px-8 lg:px-0 py-14 gap-11 bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] justify-center items-center">
            <h2 className="font-montserrat font-black text-2xl text-white text-center">
                🚀 Ship Faster. Fix Design Mismatches Instantly.
            </h2>
            <div className="flex lg:flex-row flex-col gap-8 justify-center text-white max-w-[1216px] items-center text-center">
                <div className="flex flex-col gap-3">
                    <p className="font-bold">
                        🔍 Multiple Comparison Modes
                    </p>
                    <p>
                        Overlay, Side-by-Side, Reveal Slider, and Pop-up Mode.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="font-bold">
                    ✏️ Live Feedback & Annotations
                    </p>
                    <p>
                    Click anywhere on the site to leave notes & track changes.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold">
                    ✅ Sync with Jira, Slack, & GitHub
                    </p>
                    <p>
                    Ensure issues actually get track where you already work.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold">
                    📸  No More Screenshots
                    </p>
                    <p>
                    Everything is stored and shared in one place only.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingBannerSection;