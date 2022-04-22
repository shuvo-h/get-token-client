import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import ownerHotelSlice from '../slices/ownerHotelSlice';

export const store = configureStore({
  reducer: {
    user: authSlice,
    hotels: ownerHotelSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
