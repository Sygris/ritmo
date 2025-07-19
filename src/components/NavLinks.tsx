'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { IoAnalyticsSharp, IoGridSharp, IoLeafSharp, IoLogOutSharp, IoSettingsSharp } from 'react-icons/io5';

export default function NavLinks() {

  return (
    <>
      <NavLink href='/' icon={IoGridSharp} text='Dashboard' />
      <NavLink href='/habits' icon={IoLeafSharp} text='My Habits' />
      <NavLink href='/stats' icon={IoAnalyticsSharp} text='Statistics' />
      <NavLink href='/settings' icon={IoSettingsSharp} text='Settings' />
      <NavLink href="/test" icon={IoLogOutSharp} text='Logout' />
    </>
  );
}

function NavLink({ href, icon: Icon, text }: { href: string, icon: IconType, text: string }) {
  const pathName = usePathname();
  const isActive = pathName == href;
  const isLogout = text === 'Logout';

  return (
    <Link
      href={href}
      className={clsx(
        `flex h-[48px] items-center justify-center gap-2
        bg-gray-50 p-3 text-gray-500 font-medium hover:bg-sky-100 hover:text-blue-600 
          md:flex-none md:justify-start md:p-2 md:px-6`,
        {
          'bg-sky-100 !text-blue-600': isActive,
        },
        {
          'absolute bottom-2 w-full': isLogout,
        }
      )}
    >
      <Icon size={24} />
      <p className='hidden md:block'>{text}</p>

      {isActive && (
        <span className='absolute right-0 w-1.5 h-8 bg-blue-500 rounded-l-lg' />
      )}
    </Link>
  );
}