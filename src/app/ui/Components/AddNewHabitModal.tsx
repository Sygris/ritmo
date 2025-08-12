import { createUser } from "@/lib/data";
import Modal from "./Modal";
import React from "react";

export default function AddNewHabitModal() {

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser();
  }

  return (
    <Modal title="Add New Habit">
      <form onSubmit={handleSubmit} className="space-y-4 mt-4 p-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="habitName">Habit name</label>
          <input type="text" name="habitName" id="habitName" placeholder="e.g., Morning Meditation" className="self-stretch rounded-md shadow-xs" />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="habitDescription">Description</label>
          <input type="text" name="habitDescription" id="habitDescription" placeholder="e.g,. 10 minutes of mindfulness" className="self-stretch rounded-md shadow-xs" />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="habitFrequency">Frequency</label>
          <select name="habitFrequency" id="habitFrequency" className="self-stretch rounded-md bg-gray-200 p-1">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="3TimesAWeek">3 times a week</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
          </select>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="">Color</label>
          <div className="aspect-square w-10 rounded-full bg-emerald-200" />
        </div>
        <div className="flex justify-end items-center gap-x-4">
          <button>Cancel</button>
          <button type="submit">Add Habit</button>
        </div>
      </form>
    </Modal>
  )
}