import { Modal } from "@/app/[lang]/_components/modal";
import LoginForm from "@/app/[lang]/_components/login-form";

export default async function Page() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}
