import Link from "next/link";
import { loginLink } from "./links";

export default function RegisterForm() {
  return (
    <div className="">
      <div>REGISTER FORM</div>
      <div>
        <Link href={loginLink}>Login</Link>
      </div>
    </div>
  );
}
