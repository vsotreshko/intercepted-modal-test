import Link from "next/link";
import { registerLink } from "./links";

export default function LoginForm() {
  return (
    <div className="">
      <div>LOGIN FORM</div>
      <div>
        <Link href={registerLink}>Register</Link>
      </div>
    </div>
  );
}
