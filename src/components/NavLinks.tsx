'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { 
  HiOutlineArrowTrendingUp,
  HiOutlineClipboard,
  HiOutlineHome,
  HiOutlineWrenchScrewdriver
} from 'react-icons/hi2';

const links = [
  { icon: HiOutlineHome,text: 'Ritmo', href: '/' },
  { icon: HiOutlineClipboard,text: 'My Habits', href: '/habits'},
  { icon: HiOutlineArrowTrendingUp,text: 'Statistics', href: '/settings' },
  { icon: HiOutlineWrenchScrewdriver,text: 'Settings', href: '/settings' }
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
        <Link 
          key={link.text} 
          href={link.href}
          className={clsx(
            `flex h-[48px] grow items-center justify-center gap-2 rounded-md
          bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 
            md:flex-none md:justify-start md:p-2 md:px-6`,
            {
              'bg-sky-100 text-blue-600': pathName === link.href,
              'after:absolute after:right-0 after:content-[""] after:block after:bg-blue-600 after:w-2 after:h-8 after:rounded-l-sm': pathName === link.href,
            }
          )}
        >
          <LinkIcon size={24} className='w-6'/>
          <p>{link.text}</p>
        </Link>
        )
      })}
    </>
  );
}