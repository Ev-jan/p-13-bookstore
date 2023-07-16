import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces";

interface UserState {
  user: IUser | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.email = action.payload;
      }
    },
    setUserName: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.name = action.payload;
      }
    },
    setUserBio: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.bio = action.payload;
      }
    },
  },
});

export const {
  login,
  logout,
  setUserEmail,
  setUserName,
  setUserBio
} = userSlice.actions;
export default userSlice.reducer;
