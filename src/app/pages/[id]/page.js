import React from "react";

async function getPage(id) {
  const res = await fetch(`https://demo.modifyed.xyz/wp-json/wp/v2/pages/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PageDetail({ params }) {
  const page = await getPage(params.id);
  if (!page) {
    return <main style={{ padding: 20 }}>Page not found.</main>;
  }
  return (
    <main style={{ padding: 20 }}>
      <h1>{page.title.rendered}</h1>
      <article dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </main>
  );
}
