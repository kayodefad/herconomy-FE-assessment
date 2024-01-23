/* eslint-disable no-shadow */
import { User } from '@/redux/features/user/userSlice';
import usersData from './usersData';

const getUsersData = async (): Promise<{ message: string; data: User[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'success', data: usersData });
    }, 3000);
  });
};

const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{ message: string; data: User }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersData.find((user) => user.username === username && user.password === password);
      if (user) {
        resolve({ message: 'success', data: user });
      } else {
        reject(new Error('Username or password incorrect'));
      }
    }, 3000);
  });
};

export { getUsersData, loginUser };
