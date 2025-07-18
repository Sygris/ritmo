import Link from "next/link";
import { IconType } from "react-icons";
import { 
  HiOutlineArrowTrendingUp,
  HiOutlineClipboard,
  HiOutlineHome,
  HiOutlineWrenchScrewdriver
} from "react-icons/hi2";

const links = [
  { icon: HiOutlineHome,text: "Ritmo", href: "/" },
  { icon: HiOutlineClipboard,text: "My Habits", href: "/habits "},
  { icon: HiOutlineArrowTrendingUp,text: "Statistics", href: "/settings" },
  { icon: HiOutlineWrenchScrewdriver,text: "Settings", href: "/settings" }
];

export default function SideBar() {
  return (
    <aside className="flex flex-col justify-center gap-y-10 fixed
    top-0 left-0 p-6 bg-black/80 h-screen">
      {links.map((link) => {
        return <NavLink key={link.text} href={link.href} icon={link.icon} text={link.text} />
      })}
    </aside>
  )
}

type NavLinkProps = {
  icon: IconType,
  href: string,
  text: string
}

function NavLink({icon: Icon, href, text}: NavLinkProps) {
  return (
    <Link href={`${href}`} 
      className="flex gap-x-2 text-black dark:text-white">
      <Icon size={24}/>
      {text}
    </Link> 
  );
}