import { LuLogOut } from "react-icons/lu";
import Icon from "../../ui/Icon";
import NavLinks from "./NavLinks";

export default function SideNav() {
  return (
    <aside
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