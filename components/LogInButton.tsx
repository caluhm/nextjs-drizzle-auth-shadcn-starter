import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function LogInButton() {
    return (
      <div className="absolute right-0 top-0 mr-4 mt-4">
        <Link
          href={"/api/auth/signin"}
          className={buttonVariants({ variant: "outline" })}
        >
          Login
        </Link>
      </div>
    );
}
