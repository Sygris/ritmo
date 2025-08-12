import NavLinks from "./NavLinks";

export default function SideNav() {
  return (
    <aside
      /* Index negative removed; modal now has correct higher z-index */
      className="relative bg-white w-64 border-t-1 border-gray-400/50">
      <NavLinks />
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 mt-auto">
        <button className="flex items-center space-x-3 px-4 py-3 rounded-lg w-full hover:bg-gray-100 transition-colors">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-gray-700">Status</span>
        </button>
      </div>
    </aside>
  )
}