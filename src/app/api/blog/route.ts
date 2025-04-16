// src/app/api/blog/route.ts
export async function GET() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blog`, {
    headers: {
      'x-blog-secret': process.env.BLOG_API_SECRET || ''
    }
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch blog posts" }), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
