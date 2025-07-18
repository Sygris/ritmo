import NavLinks from "./NavLinks";
import Image from "next/image";

export default function SideNav() {
  return (
    <aside className="relative flex flex-col h-screen bg-gray-50">
      <div className="flex items-center gap-2">
      <Image
        src="/profilepic.jpg"
        width={2000}
        height={2000}
        alt=""
        className="ml-5 my-6 rounded-full w-15"
      />
      <h3>John Doe</h3>
      </div>

      <NavLinks />
    </aside>
  )
}