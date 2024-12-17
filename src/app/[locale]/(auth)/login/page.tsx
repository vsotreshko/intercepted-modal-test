import LoginForm from "../../_components/login-form";

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;

  return (
    <div className="">
      <LoginForm />
    </div>
  );
}
