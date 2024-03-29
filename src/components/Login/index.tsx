/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */

'use client';

import { Button } from '@/components/ui/button';
import { login } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/lib/utils';
import Loader from '../Loader';

const Login = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/dashboard');
    }
  }, []);

  const handleSubmit = () => {
    dispatch(
      login({
        username,
        password,
      }),
    )
      .unwrap()
      .then(() => {
        router.push('/dashboard');
      });
  };

  return (
    <>
      {user.loading && (
        <div className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}
      <div className="flex h-screen w-screen  items-center justify-center ">
        <div className="w-[90%] max-w-[600px] rounded-lg p-6">
          <h1 className="-translate-x-1 text-9xl font-bold uppercase">H</h1>
          <p className="text-5xl font-bold ">Login to your account</p>
          <div className="mt-12 flex flex-col gap-5">
            <input
              type="text"
              className="focus:border-green w-full rounded border-b border-[#C3C3C3] bg-white px-3 py-3 focus:outline-none focus:ring-0"
              placeholder="User ID"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              className="focus:border-green w-full rounded border-b border-[#C3C3C3] bg-white px-3 py-3 focus:outline-none focus:ring-0"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={!username.length || !password.length || user.loading}
            className="mt-8 h-auto w-[167px] rounded-md px-7 py-[14px] text-base"
          >
            Login
          </Button>
          <div className="mt-3">
            <div className="mt-3 flex gap-6">
              <div>
                <span className="font-medium">Test Regular Account:</span>
                <br />
                <span>Username: djoris2</span>
                <br />
                <span>Password: gO4ox_7sw'X</span>
              </div>
              <div>
                <span className="font-medium">Test Admin Account:</span>
                <br />
                <span>Username: gtwidle0</span>
                <br />
                <span>Password: {'cA2r}OlWj'}</span>
              </div>
            </div>
            <div className="mt-3">
              {
                'NB: More sample login details in "usersData.ts" file (username and password fields). There\'s an "isAdmin" property for an admin user too.'
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
