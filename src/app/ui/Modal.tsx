'use client'

import { IoClose } from "react-icons/io5"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"
import Icon from "./Icon"

export default function Modal() {

  return (
    <div className="bg-black/50 w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              Add Habit
            </CardTitle>
            <button type="button">
              <Icon icon={IoClose} />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <form action="" method="post">
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="habitName">Name</label>
              <input type="text" name="habitName" id="habitName" placeholder="e.g., Morning Meditation" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="habitDescription">Description</label>
              <input type="text" name="habitDescription" id="habitDescription" placeholder="e.g., 10 minutes of mindfulness" />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}