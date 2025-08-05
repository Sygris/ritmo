'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import Icon from '../../ui/Components/Icon';
import { IconType } from 'react-icons';
import { LuChartNoAxesColumnIncreasing, LuHouse, LuListChecks, LuSettings } from 'react-icons/lu';

export default function NavLinks() {
  return (
    <nav className='flex-1 px-2 py-4 space-y-1 overflow-y-auto'>
      <NavLink href='/dashboard' icon={LuHouse} text='Dashboard' />
      <NavLink href='/dashboard/habits' icon={LuListChecks} text='My Habits' />
      <NavLink href='/dashboard/stats' icon={LuChartNoAxesColumnIncreasing} text='Statistics' />
      <NavLink href='/dashboard/settings' icon={LuSettings} text='Settings' />
    </nav>
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

  return (
    <Link
      href={href}
      className={clsx(
        'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
        {
          'bg-emerald-50 text-emerald-600': isActive
        },
        {
          ' text-gray-600 hover:bg-gray-100': !isActive
        }
      )}
    >
      {/* If size is not specify keep nav links at 20px instead of default (24px) */}
      <Icon icon={icon} size={size ? size : 20} flip={flip} />
      <p className='font-medium'>{text}</p>
    </Link>
  );
}