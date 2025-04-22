// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import BlogSlugHeader from "@/components/blogSlugPage/blogSlugHeader";
// import BlogSlugBody from "@/components/blogSlugPage/blogSlugBody";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SmallBanner from "@/components/smallBanner/smallBanner";
import { notFound } from "next/navigation";

type BlogPost = {
  slug: string;
  title: string;
  body: string;
  summary: string;
};

const fetchPost = async (slug: string): Promise<BlogPost> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${slug}`, {
    // ✅ Cache the result for 60 seconds
    next: { revalidate: 60 }, // Adjust as needed or use 'no-store' for always fresh
  });
  if (!res.ok) throw new Error("Not found");
  return res.json();
};

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   try {
//     const post = await fetchPost(params.slug);

//     return {
//       title: `${post.title} – BridgeQA Blog`,
//       description: post.summary,
//       openGraph: {
//         title: `${post.title} – BridgeQA Blog`,
//         description: post.summary,
//         url: `https://www.bridgeqa.com/blog/${params.slug}`,
//         siteName: "BridgeQA",
//         images: [
//           {
//             url: "https://www.bridgeqa.com/bridgeqa-blog-OG.webp",
//             width: 1200,
//             height: 630,
//           },
//         ],
//         type: "article",
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: `${post.title} – BridgeQA Blog`,
//         description: post.summary,
//         images: ["https://www.bridgeqa.com/bridgeqa-blog-OG.webp"],
//       },
//     };
//   } catch {
//     // If not found or error, fallback metadata
//     return {
//       title: "BridgeQA Blog",
//       description: "Explore insights on design QA and development workflows.",
//     };
//   }
// }

export default async function BlogSlug({ params }: { params: { slug: string } }) {
  let post: BlogPost;
  try {
    post = await fetchPost(params.slug);
  } catch {
    notFound();
  }
  // export default function BlogSlug(){
  console.log(post);
  return (
    <main className="overflow-hidden">
      <NavBar />
      <section className="max-w-7xl pt-20 px-2 sm:px-8 mx-auto" id="top">
        {/* <BlogSlugHeader post={post} /> */}
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
