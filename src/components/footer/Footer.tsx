const Footer = () => {
    return (
        <div className="flex w-full py-14 bg-[#0090FF] justify-center px-8">
            <div className="flex flex-row h-full max-w-[1216px] w-full justify-between items-between text-white">
                <div className="flex flex-col gap-2.5 font-bold w-full items-start hidden lg:flex">
                    <button>
                        <span className="cursor-pointer">How it works</span>
                    </button>
                    <button>
                        <span className="cursor-pointer">Who it&apos;s for</span>
                    </button>
                    <button>
                        <span className="cursor-pointer">Blog</span>
                    </button>
                    <button>
                        <span className="cursor-pointer">Contact us</span>
                    </button>
                    <p className="mt-8">
                        © {new Date().getFullYear()} BridgeQA. All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col w-full items-end gap-4 ">
                    <p className="font-bold text-2xl">
                        🚀 We’re launching soon!
                    </p>
                    <p>
                        Join the early access list and be the first to try BridgeQA.
                    </p>
                    <button className="py-2 px-6 bg-white rounded-md text-bridgeBlue font-semibold text-sm cursor-pointer">
                        Request early access
                    </button>
                    <div className="flex flex-row h-full items-end font-bold gap-11">
                        <button>
                            <span className="cursor-pointer">Privacy Policy</span>
                        </button>
                        <button>
                            <span className="cursor-pointer">Terms of Service</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;