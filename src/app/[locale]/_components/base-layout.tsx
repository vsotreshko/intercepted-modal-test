import "@/app/[locale]/globals.css";

type Params = Promise<{ locale: "de" | "en" }>;

export default async function BaseLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{props.children}</body>
    </html>
  );
}
