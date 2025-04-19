import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 20 }}>
     {/* added inline css again to make welcome at center */}
     <h1
  style={{
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "20px"
  }}
>
  Welcome
</h1>
     

      <div className="clickable-card">
      <p>
        <Link href="/posts">View Posts</Link>
      </p>
</div>



<div className="clickable-card">
<p>
        <Link href="/pages">View Pages</Link>
      </p>
</div>
      
    </main>
  );
}
