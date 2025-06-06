'use client'
import { useState } from "react";
import Overlay from "../overlay";

const SmallBanner = () => {

const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className=" flex sm:flex-row flex-col sm:text-left text-center w-full py-6 text-white justify-center items-center gap-8 bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)]">
            {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
            <p className="font-montserrat font-black text-lg">
            Join the early access list and be the first to try BridgeQA!
            </p>
            <button className="py-2 px-6 bg-white rounded-md text-bridgeBlue font-semibold text-sm cursor-pointer" onClick={() => setShowOverlay(true)}>
                Request early access
            </button>
        </div>
    )
}

export default SmallBanner