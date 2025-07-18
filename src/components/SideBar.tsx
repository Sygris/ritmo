import Link from "next/link";
import { Children } from "react";

const links = [
  { text: "Ritmo", href: "/" },
  { text: "My Habits", href: "/habits "},
  { text: "Statistics", href: "/settings" },
  { text: "Settings", href: "/settings" }
];

export default function SideBar() {
  return (
    <aside className="flex flex-col items-center justify-center gap-y-6 fixed
    top-0 left-0 p-6 bg-emerald-400 h-screen">
      {links.map((link) => {
        return <NavLink key={link.text} href={link.href} text={link.text} />
      })}
    </aside>
  )
}

type NavLinkProps = {
  href: string,
  text: string
}

function NavLink({href, text}: NavLinkProps) {
  return (
    <Link href={`${href}`}>{text}</Link> 
  );
}