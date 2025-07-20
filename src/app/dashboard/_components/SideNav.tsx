import NavLinks from "./NavLinks";
import Image from "next/image";

export default function SideNav() {
  return (
    <aside className="relative flex flex-none flex-col gap-5 h-screen bg-primary-background/5 border-r-1 border-primary-background/10 w-10 md:w-50">
      <div className="flex justify-center mt-4 md:ml-4 md:items-center md:gap-2 md:justify-start">
        <div className=""> {/* TODO: Avatar component (maybe make a border and shadow) */} 
          <Image
            src="/profilepic.jpg"
            width={2000}
            height={2000}
            alt=""
            className="rounded-full w-8 md:w-14"
          />
        </div>
        <h3 className="hidden md:block">Alfredo Silva</h3>
      </div>
      <NavLinks />
    </aside>
  )
}