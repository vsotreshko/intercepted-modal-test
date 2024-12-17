type Params = Promise<{ locale: "de" | "en" }>;

export default async function RootLayout(props: { children: React.ReactNode; params: Params }) {
  const params = await props.params;

  return <>{props.children}</>;
}
