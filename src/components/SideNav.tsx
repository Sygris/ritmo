import NavLinks from "./NavLinks";
import Image from "next/image";

export default function SideNav() {
  return (
    <aside className="relative flex flex-col h-screen bg-gray-50">
      <Image
        src="/profilepic.jpg"
        width={100}
        height={100}
        alt=""
        className="mx-auto my-6 rounded-full"
      />
      <NavLinks />
    </aside>
  )
}