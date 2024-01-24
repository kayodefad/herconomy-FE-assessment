/* eslint-disable no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-constant-condition */
/* eslint-disable arrow-body-style */

'use client';

import { Button } from '@/components/ui/button';
import { capitalize, formatAmount } from '@/lib/utils';
import dayjs from 'dayjs';
import React, { ChangeEvent, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { v4 as uuid } from 'uuid';
import { transfer } from '@/redux/features/user/userSlice';

const LineChartTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value: number; payload: { type: string } }[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-1 rounded-lg bg-[#202020] px-2 py-1 text-xs font-semibold text-white outline-none">
        <span>{capitalize(payload[0].payload.type)}</span>
        <span>{`₦ ${formatAmount(payload[0]?.value || 0)}`}</span>
      </div>
    );
  }

  return null;
};

const RevenueLineChart = () => {
  const userSlice = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState<number | undefined>(undefined);

  const handleTransfer = () => {
    dispatch(transfer({ id: +value, amount: amount as number }));
    setOpen(false);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value);
    setAmount(Number.isNaN(inputValue) ? undefined : inputValue);
  };

  return (
    <div className="flex h-full flex-col justify-between gap-12">
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-[10px]">
          <p className="text-sm font-medium text-[#56616B]">Available Balance</p>
          <p className="text-4xl font-bold">
            {userSlice.loading ? (
              '--'
            ) : (
              <>
                <span>₦&nbsp;</span>
                <span>{formatAmount(userSlice.user?.accountBalance || 0)}</span>
              </>
            )}
          </p>
        </div>
        <Dialog
          open={open}
          onOpenChange={(open) => {
            setOpen(open);
          }}
        >
          <DialogTrigger asChild>
            <Button className="h-auto w-[167px] rounded-full px-7 py-[14px] text-base">Transfer</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Transfer to another user</DialogTitle>
              <DialogDescription>Who do you want to transfer cash to?</DialogDescription>
            </DialogHeader>
            <Select
              onValueChange={(value) => {
                setValue(value);
              }}
              value={value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Users</SelectLabel>
                  {userSlice?.users?.map((item) => {
                    return (
                      <SelectItem
                        disabled={!!userSlice.user && item.id === userSlice.user.id}
                        key={uuid()}
                        value={item.id.toString()}
                      >
                        {`${item.first_name} ${item.last_name}`}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <input
              type="number"
              className="focus:border-green h-10 w-full rounded border border-[#C3C3C3] bg-white px-3 focus:outline-none focus:ring-0"
              placeholder="Amount"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" className="min-w-[120px] uppercase" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                onClick={handleTransfer}
                disabled={!value || !amount || amount <= 0}
                type="button"
                className="min-w-[120px] uppercase"
              >
                Transfer now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex-1">
        <ResponsiveContainer aspect={3.3 / 1}>
          <LineChart data={userSlice.user?.transactions} margin={{ top: 0, right: 10, left: 10, bottom: -10 }}>
            <CartesianGrid vertical={false} horizontal={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                return dayjs(tick).format('MMM DD, YYYY');
              }}
              tick={{ fill: '#56616B', fontSize: 14 }}
              stroke="#C4C4C4"
            />
            <Tooltip cursor={false} content={<LineChartTooltip />} />
            <Line type="monotone" dataKey="amount" stroke="#FF5403" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueLineChart;
