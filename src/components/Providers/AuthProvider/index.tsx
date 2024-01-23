'use client';

import { isAuthenticated } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, []);

  return <div>{children}</div>;
};

export default AuthProvider;
