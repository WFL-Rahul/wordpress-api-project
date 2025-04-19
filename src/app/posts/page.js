import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://demo.modifyed.xyz/wp-json/wp/v2/posts", { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: 20 }}>
      <h1>Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
  {posts.map(post => (
    <li key={post.id} style={{ marginBottom: 12 }}>
      <Link href={`/posts/${post.id}`}>
      <div className="clickable-card">
  {post.title.rendered}
</div>
      </Link>
    </li>
  ))}
</ul>
    </main>
  );
}
