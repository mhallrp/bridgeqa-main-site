import Image from "next/image";

const BlogHeader = () => {
    return (
        <div className="flex py-24 justify-between items-center">
            <div className="flex flex-col h-full">
                <span className="px-4 py-2 text-white font-bold text-sm bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg w-auto self-start">
                    Blog
                </span>
                <h1 className="font-montserrat font-black text-4xl my-4">
                Insights & Best Practices for{' '}
                    <span className="bg-gradient-to-r from-[#0090FF] via-[#7D00FF] to-[#A600FF] bg-clip-text text-transparent">
                        Seamless Collaboration
                    </span>
                </h1>
                <p className="text-light font-semibold">
                Get the latest insights on Design QA, collaboration workflows, and best practices for bridging the gap between design and development. From industry trends to practical guides, we cover everything you need to streamline your QA process.
                </p>
            </div>
        </div>
    )
}

export default BlogHeader;