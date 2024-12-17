import Link from "next/link";
import { loginLink } from "./_components/links";
import { registerLink } from "./_components/links";

export default async function Page() {
  return (
    <div>
      <div>
        <Link href={registerLink}>Register</Link>
      </div>

      <div>
        <Link href={loginLink}>Login</Link>
      </div>

      <div>Portal HOME</div>
    </div>
  );
}
