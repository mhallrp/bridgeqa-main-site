import BlogSlugHeader from "@/components/blogSlugPage/blogSlugHeader";
// import BlogSlugBody from "@/components/blogSlugPage/blogSlugBody";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import { Metadata } from "next";
import { JSX } from "react";

type BlogPost = {
  title: string;
  body: string;
  summary: string;
};

const fetchPost = async (slug: string): Promise<BlogPost> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blog/${slug}`, {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!res.ok) throw new Error("Not found");

  return res.json();
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params; // Await the params object

  try {
    const post = await fetchPost(slug);

    return {
      title: `${post.title} – BridgeQA Blog`,
      description: post.summary,
      openGraph: {
        title: `${post.title} – BridgeQA Blog`,
        description: post.summary,
        url: `https://www.bridgeqa.com/blog/${slug}`,
        siteName: "BridgeQA",
        images: [
          {
            url: "https://www.bridgeqa.com/bridgeqa-blog-OG.webp",
            width: 1200,
            height: 630,
          },
        ],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} – BridgeQA Blog`,
        description: post.summary,
        images: ["https://www.bridgeqa.com/bridgeqa-blog-OG.webp"],
      },
    };
  } catch {
    return {
      title: "BridgeQA Blog",
      description: "Explore insights on design QA and development workflows.",
    };
  }
}

export default async function BlogSlug(
  { params }: { params: Promise<{ slug: string }> }
): Promise<JSX.Element> {
  const { slug } = await params; // Await the params object

  let post: BlogPost;

  console.log("this is the slug " + slug)
  try {
    post = await fetchPost(slug);
  } catch {
    console.log("Not found")
    return(
      <div>
        Page not found
      </div>
    )
  }

  return (
    <main className="overflow-hidden">
      <NavBar />
      <section className="max-w-7xl pt-20 px-2 sm:px-8 mx-auto" id="top">
        <BlogSlugHeader post={ post } />
      </section>
      <section id="smallBanner">
        <SmallBanner />
      </section>
      <section id="blogSection" className="max-w-7xl py-24 px-2 sm:px-8 mx-auto">
        {/* <BlogSlugBody post={post} /> */}
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
