'use client';

import { useAppSelector } from '@/redux/hooks';
import RevenueLineChart from '../RevenueLineChart';

function Revenue() {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <h1 className="mb-5 text-4xl">
        <span>Welcome,&nbsp;</span>
        <span className="font-bold">{user.user?.first_name}</span>
      </h1>
      <RevenueLineChart />
    </>
  );
}

export default Revenue;
