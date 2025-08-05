import Icon from "../../ui/Components/Icon";
import { IoAddSharp, IoLeafSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import { ModalContext } from "@/lib/Contexts/ModalContext";
import AddNewHabitModal from "@/app/ui/Components/AddNewHabitModal";

export default function Header() {
  const handleLogout = () => {

  }

  const modalState = useContext(ModalContext);

  const openModal = () => {
    modalState?.UpdateModalState(true)
  }

  return (
    <div className="bg-white shadow-sm sticky">
      <div className="mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Icon icon={IoLeafSharp} flip={true} className="text-emerald-600 mr-2" />
          <h1 className="text-2xl font-medium text-gray-800">Ritmo</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={openModal}
            className="flex items-center px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200 text-white cursor-pointer">
            <Icon icon={IoAddSharp} size={16} className="mr-1" />
            New Habit
          </button>
          <AddNewHabitModal />
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            aria-label="logout"
          >
            <Icon icon={MdLogout} size={20} className="mr-1" />
          </button>
        </div>
      </div>
    </div>
  )
}