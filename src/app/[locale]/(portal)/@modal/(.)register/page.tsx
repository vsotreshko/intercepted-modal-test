import { Modal } from "@/app/[locale]/_components/modal";
import RegisterForm from "@/app/[locale]/_components/register-form";

export default async function Page() {
  return (
    <Modal>
      <RegisterForm />
    </Modal>
  );
}
