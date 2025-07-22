import { IoAddSharp, IoLeafSharp, IoLogOutSharp } from "react-icons/io5";
import Icon from "./Icon";

type HeaderProps = {
  onAddHabit: () => void
}

export default function Header({onAddHabit} : HeaderProps) {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Icon icon={IoLeafSharp} flip={true} className="text-emerald-600 mr-2"/>
          <h1 className="text-2xl font-medium text-gray-800">Ritmo</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onAddHabit}
            className="flex items-center px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer">
              <Icon icon={IoAddSharp} size={16} className="mr-1"/>
              New Habit
          </button>
          <button className="">
            <Icon icon={IoLogOutSharp} size={16} className="mr-1" />
          </button>
        </div>
      </div>
    </div>
  )
}