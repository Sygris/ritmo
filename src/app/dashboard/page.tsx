import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";

export default function Home() {

  // const users = await prisma.user.findMany();

  return (
    <>
      <h1 className="text-4xl font-bold text-primary-background">Welcome, wew</h1>

      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              My Habits
            </CardTitle>
            <CardDescription>
              You have 3 habits schedule for today!
              {/* You have {users.length} habits schedule for today! */}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start justify-center">
            <div></div>
            {/* {users.map((user) =>
              <Link href={"./page.tsx"} key={user.id}>{user.username}</Link>
            )} */}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
