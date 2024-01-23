import { Middleware, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const middleware: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
