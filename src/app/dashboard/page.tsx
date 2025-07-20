import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card } from "../ui/Card";

export default async function Home() {

  const users = await prisma.user.findMany();

  return (
    <>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      {users.map((user) =>
        <Link href={"./page.tsx"} key={user.id}>{user.username}</Link>
      )}

      <Card className="w-3/6">
        <h1>TEST CARD</h1>
      </Card>
    </>
  );
}
