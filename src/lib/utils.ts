import { tokenKey } from '@/redux/features/user/userSlice';
import { type ClassValue, clsx } from 'clsx';
import { hasCookie } from 'cookies-next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number) {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export const isAuthenticated = () => {
  return hasCookie(tokenKey);
};
