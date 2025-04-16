'use client'
import { useState } from "react";
import Overlay from "../overlay";
import Image from "next/image";

const Header = () => {

    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="flex w-full justify-center text-center mt-8 sm:mt-24">
            <div className="">
                {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between items-center">
                    <div className=" sm:w-[35.86%]">
                        <h1 className="font-montserrat font-black text-4xl sm:text-5xl sm:leading-[60px] sm:text-left pb-2.5 bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF] bg-clip-text text-transparent">
                            Simplify Your Design Handoff
                        </h1>
                        <h2 className="sm:text-left text-2xl sm:text-3xl font-montserrat font-bold mb-2.5">
                            No More Switching Between Figma, Live Sites, and Random Docs
                        </h2>

                        <p className="text-light font-semibold sm:text-left">
                            Compare Figma designs with the live site, leave feedback on the spot, and track every request.
                        </p>

                        <p className="text-light font-bold sm:text-left mt-2.5 mb-5">
                            Finally, a single source of truth for design handoff.
                        </p>

                        <div className="flex flex-row content-center justify-center sm:justify-start gap-3 sm:gap-6 ">
                            <a href="mailto:info@bridgeqa.com">
                                <button className="px-6 py-2 font-semibold border-2 text-sm border-bridgeBlue rounded box-border cursor-pointer">
                                    Get in touch
                                </button>
                            </a>
                            <button className="px-6 py-2 font-semibold text-sm text-sm text-white bg-bridgeBlue rounded cursor-pointer" onClick={() => setShowOverlay(true)} >
                                Request early access
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full sm:w-[50.99%] h-full">
                        <Image src="/landingHeader.webp" alt="icon" className="w-full h-full object-cover" width={0} height={0} sizes="100vw" priority/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-5 text-sm font-semibold mt-10 px-8">
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

