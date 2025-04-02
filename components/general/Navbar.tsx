import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="flex items-center  justify-between  py-6">
      {/* Left */}
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="font-semibold text-3xl">
            Blog<span className="text-blue-500">Sudat</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-500 transition">
            Home
          </Link>

          <Link href="/dashboard" className="text-sm font-medium hover:text-blue-500 transition">
            Dashboard
          </Link>
        </div>
      </div>

      {/* Right */}
      {user ? (
        <div className="flex items-center gap-4">
          <p>Welcome {user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants({ variant: "default" })}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>SignUp</RegisterLink>
        </div>
      )}
    </nav>
  );
}
