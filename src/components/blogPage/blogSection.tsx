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

    const [email, setEmail] = useState("");
    const [data, setData] = useState<BlogCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const handleMailingListSignup = async () => {
        setSuccess(false);
        setError("");

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: "mailingList", email }),
            });

            const result = await res.json();

            if (res.ok) {
                setSuccess(true);
                setEmail(""); // Clear input
            } else {
                setError(result.message || "Failed to subscribe.");
            }
        } catch (err) {
            console.error("Mailing list signup error:", err);
            setError("Unexpected error occurred.");
        }
    };


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('api/blog');
                const json: BlogCard[] = await res.json();
                setData(json);
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
                        {data.map((post) => {
                            const postTags = post.tags.split(',').map((tag) => tag.trim());
                            return (
                                <div key={post.slug}>
                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-2xl font-black font-montserrat">{post.title}</h2>
                                        <p className="text-sm py-4">{post.summary}</p>
                                    </Link>
                                    <div className="flex flex-row justify-between content-between">
                                        <div className="flex gap-1 text-white">
                                            <p className="text-base content-center">🏅</p>
                                            {postTags.map((tag) =>
                                                tag !== "Intermediate" && tag !== "Beginner" && tag !== "Advanced" ? (
                                                    <p
                                                        key={`${post.slug}-${tag}`}
                                                        className="text-sm bg-bridgeBlue content-center px-2 py-0.5 rounded"
                                                    >
                                                        {tag}
                                                    </p>
                                                ) : null
                                            )}
                                            <p className="text-base content-center ml-1">🎯</p>
                                            {postTags.map((tag) =>
                                                tag === "Intermediate" || tag === "Beginner" || tag === "Advanced" ? (
                                                    <p
                                                        key={`${post.slug}-${tag}`}
                                                        className="text-sm bg-bridgeBlue content-center px-2 py-0.5 rounded"
                                                    >
                                                        {tag}
                                                    </p>
                                                ) : null
                                            )}
                                        </div>
                                        <div className="flex gap-1">
                                            <p>🗓️</p>
                                            <p className="text-sm">{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col w-[32.89%]">
                        <h2 className="text-2xl font-black font-montserrat">
                            📪 Stay Ahead of the Curve
                        </h2>
                        <p className="font-semibold my-4">
                            Subscribe for exclusive Design QA insights, automation trends, and expert tips straight to your inbox.
                        </p>
                        <input
                            className="border py-2 px-3 rounded mb-4"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="flex flex-col gap-2">
                            <button
                                className={`bg-bridgeBlue text-white w-auto self-start cursor-pointer rounded text-sm font-semibold py-2 px-6 
        ${!isValidEmail(email) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isValidEmail(email)}
                                onClick={handleMailingListSignup}
                            >
                                Sign up
                            </button>
                            {success && (
                                <p className="text-green-600 text-sm">✅ Successfully subscribed!</p>
                            )}
                            {error && (
                                <p className="text-red-600 text-sm">❌ {error}</p>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogSection;