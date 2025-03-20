const Header = () => {
    return (
        <div className="flex w-full justify-center text-center">
            <div className="pt-30">
                <h1 className="font-montserrat font-black text-[40px]">
                    <span className="mr-1">Stop Losing Sleep Over</span>
                    <span className="bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF] bg-clip-text text-transparent mx-1">
                        Design-to-Development
                    </span>
                    <span className="ml-1">QA</span>
                </h1>
                <p className="text-light font-semibold my-5">
                    Forget manual screenshots, lost Slack messages, and endless back-and-forth. BridgeQA lets you effortlessly compare Figma designs with your live website, flag mismatches, and sync seamlessly with your developers right from your browser.
                </p>
                <div className="flex flex-row content-center justify-center gap-[24px]">
                    <button className="px-6 py-2 font-semibold border-2 text-sm border-bridgeBlue rounded box-border cursor-pointer">
                        Get in touch
                    </button>
                    <button className="px-6 py-2 font-semibold text-sm text-sm text-white bg-bridgeBlue rounded cursor-pointer">
                        Request early access
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-5 text-sm font-semibold mt-30 px-8 pb-6">
                    <p className="px-4 py-2 text-white bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg">
                        🎯 Compare Figma & Live Site Instantly
                    </p>

                    <p className="px-4 py-2 text-white bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg">
                        ⚡ Leave Feedback Directly on the Page
                    </p>

                    <p className="px-4 py-2 text-white bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg">
                        📝 Request Changes & Track Fixes
                    </p>

                    <p className="px-4 py-2 text-white bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg">
                        ✅ One Source of Truth for Design QA
                    </p>

                    <p className="px-4 py-2 text-white bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg">
                        🌐 All Inside Your Browser
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Header;

