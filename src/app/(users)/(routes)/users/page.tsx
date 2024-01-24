'use client';

import UsersList from '@/components/UsersList';
import { useAppSelector } from '@/redux/hooks';

const Users = () => {
  const userSlice = useAppSelector((state) => state.user);

  return (
    <div className="mb-40 mt-16">
      <div className="mb-8 border-b border-[#EFF1F6] py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-[#131316]">
              <span>{`${userSlice.users.length}`}</span>
              &nbsp;
              <span>Users</span>
            </p>
            <p className="text-sm font-medium text-[#56616B]">All users</p>
          </div>
        </div>
      </div>
      <UsersList />
    </div>
  );
};

export default Users;
