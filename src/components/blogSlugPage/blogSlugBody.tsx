'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';



type Props = {
    post: {
      body: string;
    };
  };

// type BlogPost = {
//   slug: string;
//   title: string;
//   body: string;
//   date: string;
// };

export default function BlogSlugBody({ post }: Props) {
//   const { slug } = useParams();
//   const [post, setPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [notFound, setNotFound] = useState(false);

//   useEffect(() => {
//     if (!slug) return;

//     fetch(`/api/blog/${slug}`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Not found');
//         return res.json();
//       })
//       .then((data) => setPost(data))
//       .catch(() => setNotFound(true))
//       .finally(() => setLoading(false));
//   }, [slug]);

//   if (loading) return <p className="p-4">Loading...</p>;
//   if (notFound || !post) return <p className="p-4">Page not found</p>;

  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold mb-4">{post.title}</h1> */}
      <div className="prose">
        <div>
          <Markdown remarkPlugins={[remarkBreaks]}>
            {post.body.replace(/\n/gi, "&nbsp; \n")}
          </Markdown>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        {/* Published on {post.date} */}
      </p>
    </div>
  );
}