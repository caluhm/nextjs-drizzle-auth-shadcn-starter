import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LogInButton from "@/components/LogInButton";
import LogOutButton from "@/components/LogOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!session ? (
        <>
          <LogInButton />
          <h1 className="text-xl font-semibold">
            Hello guest user, please log in!
          </h1>
        </>
      ) : (
        <>
          <LogOutButton />
          <h1 className="text-xl font-semibold">
            Hello, {session?.user?.email}
          </h1>
        </>
      )}
    </main>
  );
}
