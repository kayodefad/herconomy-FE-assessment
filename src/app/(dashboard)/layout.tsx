'use client';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import { getUsers } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <main>
      <Navbar />
      <Container>{children}</Container>
    </main>
  );
}
