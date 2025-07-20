import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../ui/Card"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Welcome
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" method="post">
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required placeholder="your@email.com" />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required placeholder="Your password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
