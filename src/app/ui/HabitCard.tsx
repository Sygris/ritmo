'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./Card";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import { FiCheckCircle, FiCircle, FiActivity } from "react-icons/fi";
import Icon from "./Icon";

type HabitCardProps = {
  name: string,
  description: string,
  frequency: string,
  consistency: string,
  color: string
}

export default function HabitCard(props: HabitCardProps) {

  const [isHabitComplete, setIsHabitComplete] = useState(false);

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
            <Icon
              onClick={() => {
                setIsHabitComplete(!isHabitComplete);
              }}
              icon={isHabitComplete ? FiCheckCircle : FiCircle}
              className={isHabitComplete ? "text-emerald-600" : ""}
            />
          </button>
        </div>
        <CardDescription className="mt-1 space-y-2">
          <p>{props.description}</p>
          <p className="text-[12px] text-gray-400">
            {props.frequency}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-start mt-4">
        <div className="px-1 py-0.5">
          <Icon
            icon={FiActivity}
            size={16}
            className="text-emerald-600"
          />
        </div>
        <p className="text-gray-600 text-xs">{props.consistency}</p>
      </CardContent>
    </Card>
  )
}