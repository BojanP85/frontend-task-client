import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InputErrorModel, UserModel, UserState } from "../../types";

export const initialState: UserState = {
  user: { email: "", password: "", name: "", surname: "", logout: false },
  users: [],
  loading: { submitLoading: false },
  errors: { email: "", password: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /* CONTROLLING INPUT DATA */
    getInputData(_, _action: PayloadAction<UserModel>) {},
    setInputData(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
    submitInputData(state, _action: PayloadAction<UserModel>) {
      state.loading.submitLoading = true;
    },
    handleInputError(state, action: PayloadAction<InputErrorModel>) {
      state.loading.submitLoading = false;

      for (const [key, value] of Object.entries(action.payload)) {
        state.errors = { ...state.errors, [key]: value };
      }
    },

    /* SIGNING IN USER */
    signInUser(state) {
      state.loading.submitLoading = false;
      state.user = initialState.user;
      state.errors = initialState.errors;
    },

    /* SIGNING OUT USER */
    signOutUser(state) {
      state.user.logout = true;
    },
  },
});

export const {
  getInputData,
  setInputData,
  submitInputData,
  handleInputError,
  signInUser,
  signOutUser,
} = userSlice.actions;

export default userSlice.reducer;
