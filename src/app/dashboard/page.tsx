import { LuActivity, LuCircle, LuCircleCheck } from "react-icons/lu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import Icon from "./_components/Icon";

const habitsList = [
  {
    name: "Meditation",
    description: "10 minutes of mindfulness",
    frequency: "Daily",
    consistency: "6 days of consistency",
    color: "bg-[#fedbf0]"
  },
  {
    name: "Exercise",
    description: "Go to the gym",
    frequency: "3 times a week",
    consistency: "5 days of consistency",
    color: "bg-[#fef6f0]"
  },
  {
    name: "Reading",
    description: "30 minutes of reading a book",
    frequency: "Daily",
    consistency: "2 days of consistency",
    color: "bg-[#a3dbfa]"
  },
]

export default function Home() {

  return (
    <>
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-gray-800">
            Today&apos;s Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-center">
          <p>1 of 3 habits completed</p>
        </CardContent>
      </Card>
      <div className="mt-8">
        <h2 className="text-lg font-medium">Your Habits</h2>
        <div className="flex flex-wrap gap-4 mt-8">
          {habitsList.map((habit) => {
            return (
              <Card key={habit.name} className={`${habit.color} flex flex-col flex-auto p-4`}>
                <CardHeader>
                  <div className="flex flex-row items-center justify-between">
                    <CardTitle className="text-gray-800">
                      {habit.name}
                    </CardTitle>
                    <button
                      className="hover:text-emerald-600 cursor-pointer">
                      <Icon icon={LuCircle} />
                    </button>
                  </div>
                  <CardDescription className="mt-1 space-y-4">
                    <p>{habit.description}</p>
                    <p>{habit.frequency}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-start mt-8">
                  <div className="px-1 py-0.5">
                    <Icon icon={LuActivity} size={16} className="text-emerald-600" />
                  </div>
                  <p className="text-gray-600 text-xs">{habit.consistency}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  );
}
