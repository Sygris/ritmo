import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./Card";
import { cn } from "@/lib/utils/cn";
import Icon from "../dashboard/_components/Icon";
import { LuActivity, LuCircle } from "react-icons/lu";

type HabitCardProps = {
  name: string,
  description: string,
  frequency: string,
  consistency: string,
  color: string
}

export default function HabitCard(props: HabitCardProps) {
  return (
    <Card className={cn(
      props.color,
      'flex flex-col flex-auto p-4'
    )}>
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="text-gray-800">
            {props.name}
          </CardTitle>
          <button
            className="hover:text-emerald-600 cursor-pointer">
            <Icon icon={LuCircle} />
          </button>
        </div>
        <CardDescription className="mt-1 space-y-4">
          <p>{props.description}</p>
          <p>{props.frequency}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-start mt-8">
        <div className="px-1 py-0.5">
          <Icon icon={LuActivity} size={16} className="text-emerald-600" />
        </div>
        <p className="text-gray-600 text-xs">{props.consistency}</p>
      </CardContent>
    </Card>
  )
}