/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useAppSelector } from '@/redux/hooks';
import TransactionsList from '../TransactionsList';

export type Metadata = {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name?: string;
};

export type TransactionType = {
  amount: number;
  metadata?: Metadata;
  payment_reference?: string;
  status: string;
  type: string;
  date: string;
};

const TransactionsTable = () => {
  const userSlice = useAppSelector((state) => state.user);

  return (
    <div className="mb-40 mt-16">
      <div className="mb-8 border-b border-[#EFF1F6] py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-[#131316]">
              <span>{`${userSlice.user?.transactions.length}`}</span>
              &nbsp;
              <span>Transactions</span>
            </p>
            <p className="text-sm font-medium text-[#56616B]">Your recent transactions</p>
          </div>
        </div>
      </div>
      <TransactionsList />
    </div>
  );
};

export default TransactionsTable;
