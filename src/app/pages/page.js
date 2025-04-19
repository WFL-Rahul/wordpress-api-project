import Link from "next/link";

async function getPages() {
  const res = await fetch("https://demo.modifyed.xyz/wp-json/wp/v2/pages", { next: { revalidate: 60 } });

  if (!res.ok) return [];
  return res.json();
}

export default async function PagesPage() {
  const pages = await getPages();

  return (
    <main style={{ padding: 20 }}>
      <h1>Pages</h1>
    {/* //added css to it look it like button. */}

      <ul style={{ listStyle: "none", padding: 0 }}>
  {pages.map(pages => (
    <li key={pages.id} style={{ marginBottom: 12 }}>
      <Link href={`/pages/${pages.id}`}>
      <div className="clickable-card">
  {pages.title.rendered}
</div>
      </Link>
    </li>
  ))}
</ul>



    </main>
  );
}
