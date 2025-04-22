import BlogSlugHeader from "@/components/blogSlugPage/blogSlugHeader";
import BlogSlugBody from "@/components/blogSlugPage/blogSlugBody";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from 'next';

type BlogPost = {
  slug: string;
  title: string;
  body: string;
  summary: string;
};

// Shared fetch function
const fetchPost = async (slug: string): Promise<BlogPost> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Not found");
  return res.json();
};

// Use proper Next.js types here
export async function generateMetadata(
  { params }: { params: { slug: string } },
  _?: ResolvingMetadata
): Promise<Metadata> {
  try {
    const post = await fetchPost(params.slug);
    return {
      title: `${post.title} – BridgeQA Blog`,
      description: post.summary,
    };
  } catch {
    return {
      title: "BridgeQA Blog",
      description: "Explore insights on design QA and development workflows.",
    };
  }
}

export default async function BlogSlug({
  params,
}: {
  params: { slug: string };
}) {
  let post: BlogPost;
  try {
    post = await fetchPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      <NavBar />
      <section className="max-w-7xl pt-20 px-2 sm:px-8 mx-auto" id="top">
        <BlogSlugHeader post={post} />
      </section>
      <section id="smallBanner">
        <SmallBanner />
      </section>
      <section id="blogSection" className="max-w-7xl py-24 px-2 sm:px-8 mx-auto">
        <BlogSlugBody post={post} />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
