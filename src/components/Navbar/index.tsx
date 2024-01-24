'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { v4 as uuid } from 'uuid';
import React from 'react';
import { UserIcon } from 'lucide-react';
import { logout } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import HomeIcon from '../IconSVGs/HomeIcon';
import AnalyticsIcon from '../IconSVGs/AnalyticsIcon';
import RevenueIcon from '../IconSVGs/RevenueIcon';
import NotifIcon from '../IconSVGs/NotifIcon';
import MessageIcon from '../IconSVGs/MessageIcon';
import { Button } from '../ui/button';

type Navlink = {
  name: string;
  link: string;
  icon: React.JSX.Element;
  activeIcon: React.JSX.Element;
  show: boolean;
};

function Navbar() {
  const userSlice = useAppSelector((state) => state.user);

  const navLinks: Navlink[] = [
    {
      name: 'Home',
      link: 'dashboard',
      icon: <HomeIcon />,
      activeIcon: <HomeIcon fill="white" />,
      show: true,
    },
    {
      name: 'Savings',
      link: 'savings',
      icon: <AnalyticsIcon />,
      activeIcon: <AnalyticsIcon fill="white" />,
      show: true,
    },
    {
      name: 'Invest',
      link: 'invest',
      icon: <RevenueIcon />,
      activeIcon: <RevenueIcon fill="white" />,
      show: true,
    },
    {
      name: 'Users',
      link: 'users',
      icon: <UserIcon size={20} color="#56616B" />,
      activeIcon: <UserIcon size={20} color="white" />,
      show: userSlice.user?.isAdmin as boolean,
    },
  ];

  const filteredNavLinks = navLinks.filter((link) => link.show);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const getActiveRoute = (link: Navlink) =>
    (pathname.includes(`/${link.link}`) && link.link !== '/') || (pathname === '/' && link.link === '/');

  return (
    <div className="sticky top-0 z-10">
      <div className="h-4 w-full bg-white" />
      <nav className="mx-[3%] mb-12 flex items-center justify-between rounded-[100px] border-2 border-white bg-white py-4 pl-7 pr-8 shadow-nav">
        <Link href="/">
          <span className="text-5xl font-bold uppercase">H</span>
        </Link>
        <ul className="flex items-center gap-6">
          {filteredNavLinks.map((link) => (
            <li key={uuid()}>
              <Link
                href={link.link}
                className={`flex items-center gap-1 rounded-full px-[18px] py-2 ${getActiveRoute(link) ? 'bg-[#131316] text-white' : 'text-[#56616B] hover:bg-[#EEF1F6]'}`}
              >
                {getActiveRoute(link) ? <span>{link.activeIcon}</span> : <span>{link.icon}</span>}
                <span className="font-semibold">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-7">
            <NotifIcon />
            <MessageIcon />
          </div>
          <Button
            onClick={() => {
              dispatch(logout());
              router.push('/login');
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
