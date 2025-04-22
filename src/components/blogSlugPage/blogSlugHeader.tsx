
type Props = {
    post: {
        title: string;
        summary: string;
    };
};

const BlogSlugHeader = ({ post }: Props) => {

    return (
        <div className="flex py-24 justify-between items-center">
            <div className="flex flex-col h-full">
                <span className="px-4 py-2 text-white font-bold text-sm bg-[linear-gradient(to_right,_#0090FF_0%,_#7D00FF_86%,_#A600FF_100%)] rounded-lg w-auto self-start">
                    Blog
                </span>
                <h1 className="font-montserrat font-black text-4xl my-4">
                    {post.title}
                </h1>
                <p className="text-light font-semibold">
                    {post.summary}
                </p>
            </div>
        </div>
    )
}

export default BlogSlugHeader;