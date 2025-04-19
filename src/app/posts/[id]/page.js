import React from "react";

async function getPost(id) {
  const res = await fetch(`https://demo.modifyed.xyz/wp-json/wp/v2/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PostDetail({ params }) {
  const post = await getPost(params.id);
  if (!post) {
    return <main style={{ padding: 20 }}>Post not found.</main>;
  }
  return (
    <main style={{ padding: 20 }}>
      <h1>{post.title.rendered}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}
