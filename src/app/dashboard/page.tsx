import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import Link from "next/link";

export default async function Home() {

  const users = await prisma.user.findMany();

  return (
    <>
      <h1 className="text-4xl font-bold text-primary-background">Welcome, {users[0].username}</h1>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              My Habits
            </CardTitle>
            <CardDescription>
              You have {users.length} habits schedule for today!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start justify-center">
            {users.map((user) =>
              <Link href={"./page.tsx"} key={user.id}>{user.username}</Link>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
