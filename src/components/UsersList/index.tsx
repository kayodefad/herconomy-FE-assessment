/* eslint-disable no-nested-ternary */

'use client';

import React from 'react';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { deleteUser } from '@/redux/features/user/userSlice';
import { Button } from '../ui/button';

const UsersList = () => {
  const userSlice = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const deleteUserFromList = (id: number) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="flex flex-col gap-6">
      {userSlice?.users.map((user) => {
        return (
          <div key={uuid()} className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="flex flex-col justify-between font-medium">
                <p className="text-[#131316]">{`${user.first_name} ${user.last_name}` || '--'}</p>
                <p className="text-sm text-[#56616B]">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <p className="flex justify-end font-bold text-[#131316]">{user.username}</p>
                <p className="flex justify-end text-sm font-medium text-[#56616B]">
                  <span>{user.gender}</span>
                </p>
              </div>
              <Button
                onClick={() => deleteUserFromList(user.id)}
                disabled={!!userSlice.user && user.id === userSlice.user.id}
                variant="destructive"
                size="sm"
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
