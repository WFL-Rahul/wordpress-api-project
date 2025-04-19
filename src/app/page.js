import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 20 }}>
      {/* added inlne css to make welcome in center */}
      <h1
      
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px"
        }}
      >
        Welcome
      </h1>
      <Link href="/posts" className="big-link-btn">
        View Posts
      </Link>
      <Link href="/pages" className="big-link-btn">
        View Pages
      </Link>
    </main>
  );
}