/* eslint-disable arrow-body-style */

'use client';

import { formatAmount } from '@/lib/utils';
import { v4 as uuid } from 'uuid';
import InfoIcon from '../IconSVGs/InfoIcon';

const WalletData = () => {
  const walletData = [
    {
      title: 'Ledger Balance',
      amount: 500,
    },
    {
      title: 'Total Payout',
      amount: 500,
    },
    {
      title: 'Total Revenue',
      amount: 1250.56,
    },
    {
      title: 'Pending Payout',
      amount: 0,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {walletData.map((wallet) => {
        return (
          <div key={uuid()} className="flex items-start justify-between">
            <div className="flex flex-col gap-[10px]">
              <p className="text-sm font-medium text-[#56616B]">{wallet.title}</p>
              <p className="text-[28px] font-bold leading-[38px]">
                {/* {getWalletData.isLoading ? (
                  '--'
                ) : (
                  <>
                    <span>₦&nbsp;</span>
                    <span>{formatAmount(wallet.amount || 0)}</span>
                  </>
                )} */}
                <span>₦&nbsp;</span>
                <span>{formatAmount(wallet.amount || 0)}</span>
              </p>
            </div>
            <InfoIcon />
          </div>
        );
      })}
    </div>
  );
};

export default WalletData;
