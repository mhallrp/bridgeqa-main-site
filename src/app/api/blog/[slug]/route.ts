/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: any }
) {
  const slug = params.slug as string;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blog/${slug}`, {
    headers: {
      'x-blog-secret': process.env.BLOG_API_SECRET || '',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const post = await res.json();

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
