import Link from "next/link";
import { registerLink } from "@/app/[locale]/_components/links";
import { loginLink } from "@/app/[locale]/_components/links";

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
