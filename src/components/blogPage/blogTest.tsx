'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type BlogPost = {
  slug?: string;
  title?: string;
  body?: string;
  date?: string;
  error?: string;
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then((data) => setPost(data))
      .catch(() => setPost({ error: 'Failed to load blog post' }))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="p-4">Loading...</p>;

  if (!post || post.error) {
    return <p className="p-4 text-red-500">Error: {post?.error || 'Unknown error'}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Published on {post.date}
      </p>
      <div className="prose">
        <div>{post.body}</div>
      </div>
    </div>
  );
}
