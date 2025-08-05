import { Card, CardHeader, CardTitle } from "../ui/Components/Card";

export default function LoginPage() {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome Back
            <div>
              <button type="button">Sign in with Google</button>
              <button type="button">Sign in with Apple</button>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
