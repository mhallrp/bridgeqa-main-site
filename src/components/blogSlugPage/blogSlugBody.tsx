import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

type Props = {
    post: {
      body: string;
    };
  };

export default function BlogSlugBody({ post }: Props) {
  return (
    <div className="p-6">
      <div className="prose">
        <div>
          <Markdown remarkPlugins={[remarkBreaks]}>
            {post.body.replace(/\n/gi, "&nbsp; \n")}
          </Markdown>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">
      </p>
    </div>
  );
}