import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const users = await prisma.user.findMany();

  return (
    <>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      {users.map((user) =>
        <Link href={"./page.tsx"} key={user.id}>{user.username}</Link>
      )}
    </>
  );
}
