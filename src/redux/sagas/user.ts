import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import { getUsersAPI } from "../../services/userApi";
import { UserModel } from "../../types";
import { validateSignInInput } from "../../utils/validateInputs";
import {
  signInUser,
  submitInputData,
  handleInputError,
  getInputData,
  setInputData,
} from "../slice/user";

function* handleInputData(action: PayloadAction<UserModel>) {
  try {
    yield put(setInputData(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* handleSignInUser(action: PayloadAction<UserModel>) {
  const { email, password } = action.payload;

  try {
    const { data }: { data: UserModel[] } = yield call(getUsersAPI);

    const { isValid, errors } = validateSignInInput(data, email, password);

    if (!isValid) {
      yield put(handleInputError({ ...errors }));
      throw new Error();
    }

    const loggedUser = data.find(
      (user) => user.email === email && user.password === password
    );

    // Storing user data (name, surname) in localStorage so we can retrieve it inside Home page
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({ name: loggedUser?.name, surname: loggedUser?.surname })
    );

    yield put(signInUser());
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(getInputData.type, handleInputData);
  yield takeLatest(submitInputData.type, handleSignInUser);
}
