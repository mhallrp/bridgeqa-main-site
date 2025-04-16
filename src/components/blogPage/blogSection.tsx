
import ReactMarkdown from "react-markdown"

const BlogSection = () => {
    const markdown = `
# Blog Title (H1)
Some intro text under the title.
## Section Heading (H2)
This is a paragraph under an H2 heading. Here’s some **bold** text and a [link](https://example.com).
This is a paragraph under an H2 heading. Here’s some **bold** text and a [link](https://example.com).
- List item 1
- List item 2
`

    return (
        <div className="p-4">
            {/* <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => (
                        <h1 className="text-4xl font-bold text-blue-700 mb-4" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-3" {...props} />
                    ),

                    li: ({ node, ...props }) => (
                        <li className="ml-6 list-disc text-gray-600 mb-1" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                        <a className="text-blue-500 underline hover:text-blue-700" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong className="font-bold text-black" {...props} />
                    )
                }}
            >
                {markdown}
            </ReactMarkdown> */}

            <h1 className="text-4xl font-black text-red-600 mt-8">H1 test</h1>
        </div>
    )
}

export default BlogSection
