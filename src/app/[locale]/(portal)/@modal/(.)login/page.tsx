import { Modal } from "@/app/[locale]/_components/modal";
import LoginForm from "@/app/[locale]/_components/login-form";

export default async function Page() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}
