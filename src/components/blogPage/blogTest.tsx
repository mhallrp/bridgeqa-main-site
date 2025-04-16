'use client'
import { useEffect, useState } from "react";

export default function BlogTest() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('api/blog');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
        setData({ error: "Failed to load blog posts" });
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4 font-mono text-sm">
      <h1 className="text-2xl font-bold mb-4">Blog Post Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
