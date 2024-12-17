import "@/app/[locale]/globals.css";
import BaseLayout from "@/app/[locale]/_components/base-layout";

type Params = Promise<{ locale: "de" | "en" }>;

export default async function RootLayout(props: { modal: React.ReactNode; children: React.ReactNode; params: Params }) {
  const params = await props.params;

  return (
    <BaseLayout>
      <>
        {props.modal}
        {props.children}
      </>
    </BaseLayout>
  );
}
