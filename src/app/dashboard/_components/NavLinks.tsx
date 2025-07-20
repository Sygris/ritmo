'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import Icon from './Icon';
import { IoAnalyticsSharp, IoGridSharp, IoLeafSharp, IoLogOutSharp, IoSettingsSharp } from 'react-icons/io5';
import { IconType } from 'react-icons';

export default function NavLinks() {
  return (
    <>
      <NavLink href='/dashboard' icon={IoGridSharp} text='Dashboard' />
      <NavLink href='/dashboard/habits' icon={IoLeafSharp} flip={true} text='My Habits' />
      <NavLink href='/dashboard/stats' icon={IoAnalyticsSharp} text='Statistics' />
      <NavLink href='/dashboard/settings' icon={IoSettingsSharp} text='Settings' />
      <NavLink href="/" icon={IoLogOutSharp} text='Logout' size={24} />
    </>
  );
}

type NavLinkProps = {
  href: string,
  icon: IconType,
  text: string,
  flip?: boolean
  size?: number
}

function NavLink({ href, icon, text, flip, size }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName == href;
  const isLogout = text === 'Logout';

  return (
    <Link
      href={href}
      className={clsx(
        `flex h-[48px] items-center justify-center gap-2
        p-3 font-medium hover:bg-primary-background/20 hover:text-black 
        md:flex-none md:justify-start md:p-2 md:px-6`,
        {
          'bg-primary-background/20': isActive,
        },
        {
          'absolute bottom-2 w-full': isLogout,
        }
      )}
    >
      <Icon icon={icon} size={size} flip={flip} className='text-primary-background'/>
      <p className='hidden md:block'>{text}</p>

      {isActive && (
        <span className='absolute right-0 w-1.5 h-8 bg-primary-background rounded-l-lg' />
      )}
    </Link>
  );
}