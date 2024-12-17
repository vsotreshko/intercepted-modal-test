import RegisterForm from "../../_components/register-form";

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;

  return (
    <div className="">
      <RegisterForm />
    </div>
  );
}
