'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { IoAnalyticsSharp, IoGridSharp, IoLeafSharp, IoLogOutSharp, IoSettingsSharp } from 'react-icons/io5';

export default function NavLinks() {
  return (
    <>
      <NavLink href='/dashboard' icon={IoGridSharp} text='Dashboard' />
      <NavLink href='/dashboard/habits' icon={IoLeafSharp} text='My Habits' />
      <NavLink href='/dashboard/stats' icon={IoAnalyticsSharp} text='Statistics' />
      <NavLink href='/dashboard/settings' icon={IoSettingsSharp} text='Settings' />
      <NavLink href="/" icon={IoLogOutSharp} text='Logout' />
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
        p-3 font-medium hover:bg-primary-background/50 hover:text-black 
        md:flex-none md:justify-start md:p-2 md:px-6`,
        {
          'bg-primary-background/50': isActive,
        },
        {
          'absolute bottom-2 w-full': isLogout,
        }
      )}
    >
      <Icon size={24} className='text-primary-background'/>
      <p className='hidden md:block'>{text}</p>

      {isActive && (
        <span className='absolute right-0 w-1.5 h-8 bg-accent rounded-l-lg' />
      )}
    </Link>
  );
}