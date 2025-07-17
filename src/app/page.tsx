import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const users = await prisma.user.findMany();

  return (
    <main className="flex flex-col gap-y-5 items-center pt-4 text-center">
      {users.map((user) =>
        <Link href={"./page.tsx"} key={user.id}>{user.username}</Link>
      )}
    </main>
  );
}
