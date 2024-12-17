import { Modal } from "@/app/[lang]/_components/modal";
import RegisterForm from "@/app/[lang]/_components/register-form";

export default async function Page() {
  return (
    <Modal>
      <RegisterForm />
    </Modal>
  );
}
