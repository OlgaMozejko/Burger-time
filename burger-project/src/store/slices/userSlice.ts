import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userInfo: { id: string; name: string } | null;
}

const initialState: UserState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<{ id: string; name: string } | null>) {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;