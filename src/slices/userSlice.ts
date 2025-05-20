import { createSlice } from '@reduxjs/toolkit';
import { ManageUsersData } from '../utlis/types/manageClientsType';

const initialState: { users: ManageUsersData[] } = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((_, index) => index !== action.payload);
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
