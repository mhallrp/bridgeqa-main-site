import Image from "next/image";

const HowSectionOne = () => {
    return (
        <div className="flex flex-row justify-between items-center">

            <div className="flex sm:w-[32.56%] h-full">
                <div className="flex flex-col gap-12 text-center sm:text-left">
                    <div className="flex flex-col w-full gap-4">
                        <h2 className="font-black font-montserrat text-2xl">
                            🔎 Step 1: Install the BridgeQA Chrome Extension
                        </h2>
                        <div className="flex flex-col text-sm gap-2.5 text-light font-inter">
                            <p>
                                1.	One-click installation &ndash; Add BridgeQA to Chrome.
                            </p>
                            <p>
                                2.	Works seamlessly in your browser &ndash; No extra setup required.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <h2 className="font-black font-montserrat text-2xl">
                            🎯 Step 2: Link Your Figma Design
                        </h2>
                        <div className="flex flex-col text-sm gap-2.5 text-light font-inter ">
                            <p>
                                1.	Select the Figma frame you want to compare.
                            </p>
                            <p>
                                2.	BridgeQA overlays it on your live site &ndash; see mismatches instantly.
                            </p>
                            <p>
                                3.	Easily toggle the overlay on/off when reviewing pages.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <h2 className="font-black font-montserrat text-2xl">
                            📝 Step 3: Annotate, Flag Issues & Track Fixes
                        </h2>
                        <div className="flex flex-col text-sm gap-2.5 text-light font-inter">
                            <p>
                                1.	Click anywhere on the live site to leave comments.
                            </p>
                            <p>
                                2.	Tag teammates and assign fixes directly inside BridgeQA.
                            </p>
                            <p>
                                3.	No more lost feedback &ndash; everything is stored in one place.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <h2 className="font-black font-montserrat text-2xl">
                            🤝 Step 4: Sync with Your Development Workflow
                        </h2>
                        <div className="flex flex-col text-sm gap-2.5 text-light font-inter">
                            <p>
                                BridgeQA integrates with the tools your team already uses:
                            </p>
                            <p>
                                ✅ Slack &ndash; Send flagged issues to your dev team instantly.
                            </p>
                            <p>
                                ✅ Jira &ndash; Create actionable tickets with screenshots and notes.
                            </p>
                            <p>
                                ✅ GitHub &ndash; Track issues directly in pull requests.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-[59.54%] h-full hidden sm:block">
                <Image src="/howImage.webp" alt="icon" className="w-full h-full object-cover" width={0} height={0} sizes="100vw"/>
            </div>
        </div>
    )
}

export default HowSectionOne;