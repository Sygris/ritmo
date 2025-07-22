import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";

export default function Home() {

  // const users = await prisma.user.findMany();

  return (
    <>
      <Card className="bg-white shadow-sm shadow-gray-200">
        <CardHeader>
          <CardTitle>
            Today's Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-center">
          <div>

          </div>
          <p>1 of 3 habits completed</p>
          {/* {users.map((user) =>
              <Link href={"./page.tsx"} key={user.id}>{user.username}</Link>
            )} */}
        </CardContent>
      </Card>

      <h2 className="text-xl font-medium">Your Habits</h2>

    </>
  );
}
