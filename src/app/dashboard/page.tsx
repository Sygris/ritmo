import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import HabitCard from "../ui/HabitCard";
import ProgressBar from "../ui/ProgressBar";

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
      <Card className="p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-gray-800">
            Today&apos;s Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center justify-center">
          <ProgressBar radius={60} stroke={10} percentage={67} />
          <p>2 of 3 habits completed</p>
        </CardContent>
      </Card>
      <div className="mt-8">
        <h2 className="text-lg font-medium">Your Habits</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {habitsList.map((habit) => {
            return (
              <HabitCard
                key={habit.name}
                name={habit.name}
                description={habit.description}
                frequency={habit.frequency}
                consistency={habit.consistency}
                color={habit.color}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}
