'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogSection = () => {
    interface BlogCard {
        slug: string;
        title: string;
        summary: string;
        tags: string;
        date: string;
    }

    const [data, setData] = useState<BlogCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('api/blog');
                const json: BlogCard[] = await res.json();
                setData(json);

                // Extract and flatten all tags into an array
                const allTags = json
                    .flatMap((post: BlogCard) => post.tags.split(','))
                    .map((tag: string) => tag.trim()) // clean whitespace
                    .filter((tag: any) => tag); // remove empty strings

                // Optional: get unique tags only
                const uniqueTags = Array.from(new Set(allTags));

                setTags(uniqueTags);
            } catch (err) {
                console.error("Failed to load blog posts:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {loading ? (
                <p className="w-full justify-center text-center">Loading...</p>
            ) : (
                <div className="flex justify-between">
                    <div className="flex flex-col gap-24 w-[59.21%]">
                        {data.map((post) => (

                            <Link href={`/blog/${post.slug}`}>
                                <div key={post.slug}>
                                    <h2 className="text-2xl font-black font-montserrat">{post.title}</h2>
                                    <p className="text-sm py-4">{post.summary}</p>
                                    <div className="flex flex-row justify-between content-between">
                                        <div className="flex gap-1 text-white">
                                            <p className="text-base content-center">
                                                🏅
                                            </p>
                                            {tags.map((tag) => [
                                                tag != "Intermediate" && tag != "Beginner" && tag != "Advanced" ? (
                                                    <p key={post.slug} className="text-sm bg-bridgeBlue content-center px-2 py-0.5 rounded">
                                                        {tag}
                                                    </p>
                                                ) : null
                                            ])}
                                            <p className="text-base content-center">
                                                🎯
                                            </p>
                                            {tags.map((tag) => [
                                                tag == "Intermediate" || tag == "Beginner" || tag == "Advanced" ? (
                                                    <p key={post.slug} className="text-sm bg-bridgeBlue content-center px-2 py-0.5 rounded">
                                                        {tag}
                                                    </p>
                                                ) : null
                                            ])}
                                        </div>
                                        <div className="flex gap-1">
                                            <p>
                                                🗓️
                                            </p>
                                            <p className="text-sm">
                                                {post.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex w-1/2 bg-red-500 w-[32.89%]">

                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogSection;