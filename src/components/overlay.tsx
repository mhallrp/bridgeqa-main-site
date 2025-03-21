"use client";

import React from "react";

type OverlayProps = {
    onClose: () => void;
};

const Overlay: React.FC<OverlayProps> = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.45)] flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="p-9 bg-white border-4 border-bridgeBlue rounded-3xl flex flex-col gap-6"
                onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
            >
                <h1 className="font-montserrat font-black text-4xl">
                    Request Early Access to BridgeQA
                </h1>
                <p className="font-semibold text-2xl text-light">
                    We’re launching soon. Sign up to be among the first to streamline your design QA workflow.
                </p>

            </div>
        </div>



    );
};

export default Overlay;
