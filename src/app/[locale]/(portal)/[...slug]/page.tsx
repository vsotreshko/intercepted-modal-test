import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ slug: string[]; locale: "de" | "en" }> }) {
  const params = await props.params;

  return (
    <section className="">
      <div>SLUG: {params.slug.join("/")}</div>
    </section>
  );
}
