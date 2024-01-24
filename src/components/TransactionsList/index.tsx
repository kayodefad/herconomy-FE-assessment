/* eslint-disable no-nested-ternary */

'use client';

import React from 'react';
import { v4 as uuid } from 'uuid';
import { formatAmount } from '@/lib/utils';
import dayjs from 'dayjs';
import { useAppSelector } from '@/redux/hooks';
import ArrowIcon from '../IconSVGs/ArrowIcon';

const TransactionsList = () => {
  const userSlice = useAppSelector((state) => state.user);

  return (
    <div className="flex flex-col gap-6">
      {userSlice?.user?.transactions.map((transaction) => {
        return (
          <div key={uuid()} className="flex items-center justify-between">
            <div className="flex gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  transaction.type === 'withdrawal' ? 'bg-[#F9E3E0]' : 'bg-[#E3FCF2]'
                }`}
              >
                {transaction.type === 'withdrawal' ? (
                  <span className="rotate-180">
                    <ArrowIcon fill="#961100" />
                  </span>
                ) : (
                  <span>
                    <ArrowIcon />
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between font-medium">
                <p className="text-[#131316]">{transaction?.payment_reference || '--'}</p>
                <p className="text-sm text-[#56616B]">{`${transaction.type === 'withdrawal' ? 'Withdrawal' : 'Deposit'}`}</p>
              </div>
            </div>
            <div>
              <p className="flex justify-end font-bold text-[#131316]">
                <span>₦&nbsp;</span>
                <span>{formatAmount(transaction?.amount || 0)}</span>
              </p>
              <p className="flex justify-end text-sm font-medium text-[#56616B]">
                {dayjs(transaction?.date || new Date().toLocaleString()).format('MMM DD, YYYY')}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsList;
