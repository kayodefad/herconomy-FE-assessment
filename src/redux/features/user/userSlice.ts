import { getUsersData, loginUser } from '@/lib/mocks/users';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { setCookie, deleteCookie } from 'cookies-next';
import toast from 'react-hot-toast';

export const tokenKey = 'tokenHerconomy';

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  username: string;
  accountBalance: number;
  password: string;
  isAdmin: boolean;
  transactions: {
    amount: number;
    payment_reference: string;
    type: 'withdrawal' | 'deposit';
    date: string;
  }[];
  token: string;
};

export const getUsers = createAsyncThunk('user/getUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await getUsersData();
    return response.data;
  } catch (error) {
    const errorMessage = (error as AxiosError).message || 'An error occurred';
    return rejectWithValue(errorMessage);
  }
});

export const login = createAsyncThunk(
  'user/loginUser',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginUser({ username, password });
      setCookie(tokenKey, response.data.token);
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || 'An error occurred during login';
      return rejectWithValue(errorMessage);
    }
  },
);

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      deleteCookie(tokenKey);
    },
    transfer: (state, action: PayloadAction<{ id: number; amount: number; onSuccess: () => void }>) => {
      const userToTransferToIndex = state.users.findIndex((us) => us.id === action.payload.id);
      const currentUserIndex = state.users.findIndex((us) => us.id === state.user!.id);
      const hasEnoughBalance = state.user?.accountBalance! >= action.payload.amount;

      if (!hasEnoughBalance) {
        toast.error('Insufficient funds');
      } else {
        const updatedUserToTransferTo = state.users[userToTransferToIndex];
        updatedUserToTransferTo.accountBalance += action.payload.amount;
        state.user!.accountBalance -= action.payload.amount;
        const updatedCurrentUser = state.users[currentUserIndex];
        updatedCurrentUser.accountBalance -= action.payload.amount;
        toast.success('Transfer successful');
        action.payload.onSuccess();
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      toast.success('User deleted');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, transfer, deleteUser } = userSlice.actions;

export default userSlice.reducer;
