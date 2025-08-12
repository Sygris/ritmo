import { LuLogOut } from "react-icons/lu";
import Icon from "../../ui/Components/Icon";
import NavLinks from "./NavLinks";

export default function SideNav() {
  return (
    <aside
      /* Index needs to be negative to prevent to show up when Modal is open  */
      className="relative bg-white w-64 border-t-1 border-gray-400/50">
      <NavLinks />
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 mt-auto">
        <button className="flex items-center space-x-3 px-4 py-3 rounded-lg w-full hover:bg-gray-100 transition-colors">
          <Icon icon={LuLogOut} />
          <p>Logout</p>
        </button>
      </div>
    </aside>
  )
}