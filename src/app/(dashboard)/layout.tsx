'use client';

import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { getUsers } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const userSlice = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {userSlice.loading && (
        <div className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}
      <main>
        <Navbar />
        <Container>{children}</Container>
      </main>
    </>
  );
}
