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
import { IconTree, IconType } from 'react-icons';

const links = [
  { icon: HiOutlineHome, text: 'Ritmo', href: '/' },
  { icon: HiOutlineClipboard, text: 'My Habits', href: '/habits' },
  { icon: HiOutlineArrowTrendingUp, text: 'Statistics', href: '/settings' },
  { icon: HiOutlineWrenchScrewdriver, text: 'Settings', href: '/settings' }
];

export default function NavLinks() {

  return (
    <>
      <NavLink href='/' icon={HiOutlineHome} text='Dashboard' />
      <NavLink href='/habits' icon={HiOutlineClipboard} text='My Habits' />
      <NavLink href='/stats' icon={HiOutlineArrowTrendingUp} text='Statistics' />
      <NavLink href='/settings' icon={HiOutlineWrenchScrewdriver} text='Settings' />
    </>
  );
}

function NavLink({ href, icon: Icon, text }: { href: string, icon: IconType, text: string }) {
  const pathName = usePathname();
  const isActive = pathName == href;

  return (
    <Link
      href={href}
      className={clsx(
        `flex h-[48px] grow items-center justify-center gap-2 rounded-md
          bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 
            md:flex-none md:justify-start md:p-2 md:px-6`,
        {
          'bg-sky-100 text-blue-600': isActive,
        }
      )}
    >
      <Icon size={24} className='w-6' />
      <p className='hidden md:block'>{text}</p>

      {isActive && (
        <span className='absolute right-0 w-1.5 h-8 bg-blue-500 rounded-l-lg' />
      )}
    </Link>
  );
}