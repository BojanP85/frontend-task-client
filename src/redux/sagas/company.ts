import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  deleteCompanyAPI,
  editCompanyAPI,
  getCompaniesAPI,
} from "../../services/companyApi";
import { CompanyModel, FetchCompaniesPayload } from "../../types";
import {
  deleteCompany,
  editCompany,
  getCompanies,
  getCompanyId,
  getInputData,
  setCompanies,
  setInputData,
  submitInputData,
} from "../slice/company";

function* handleFetchCompanies(action: PayloadAction<FetchCompaniesPayload>) {
  try {
    const { data }: { data: CompanyModel[] } = yield call(
      getCompaniesAPI,
      action.payload
    );
    yield put(setCompanies(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleInputData(action: PayloadAction<CompanyModel>) {
  try {
    yield put(setInputData(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* handleEditCompany(action: PayloadAction<CompanyModel>) {
  try {
    yield call(editCompanyAPI, action.payload);
    yield put(editCompany(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* handleDeleteCompany(action: PayloadAction<string>) {
  try {
    yield call(deleteCompanyAPI, action.payload);
    yield put(deleteCompany(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* companySaga() {
  yield takeLatest(getCompanies.type, handleFetchCompanies);
  yield takeLatest(getInputData.type, handleInputData);
  yield takeLatest(submitInputData.type, handleEditCompany);
  yield takeEvery(getCompanyId.type, handleDeleteCompany);
}
