import { prisma } from "@/lib/prisma";

export default async function Home() {

  const users = await prisma.user.findMany();

  return (
    <main className="flex flex-col gap-y-5 items-center pt-4 text-center">
      <ul>
        {users.map((user) =>
          <li key={user.id}>{user.username}</li>
        )}
      </ul>
    </main>
  );
}
