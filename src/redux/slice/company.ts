import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CompanyModel, CompanyState, FetchCompaniesPayload } from "../../types";

export const initialState: CompanyState = {
  company: {
    id: "",
    name: "",
    email: "",
    createdBy: "",
    updatedBy: "",
    date: "",
  },
  companies: [],
  loading: { fetchLoading: false, submitLoading: false },
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    /* FETCHING COMPANIES */
    getCompanies(state, _action: PayloadAction<FetchCompaniesPayload>) {
      state.loading.fetchLoading = true;
    },
    setCompanies(state, action: PayloadAction<CompanyModel[]>) {
      state.loading.fetchLoading = false;
      state.companies = action.payload;
    },

    /* CONTROLLING INPUT DATA */
    getInputData(_, _action: PayloadAction<CompanyModel>) {},
    setInputData(state, action: PayloadAction<CompanyModel>) {
      state.company = action.payload;
    },
    submitInputData(state, _action: PayloadAction<CompanyModel>) {
      state.loading.submitLoading = true;
    },

    /* EDITING COMPANY */
    getCompany(state, action: PayloadAction<CompanyModel>) {
      state.company = action.payload;
    },
    editCompany(state, action: PayloadAction<CompanyModel>) {
      state.loading.submitLoading = false;
      state.companies = state.companies.map((company) =>
        company.id === action.payload.id ? action.payload : company
      );
      state.company = initialState.company;
    },

    /* DELETING COMPANY */
    getCompanyId(state, action: PayloadAction<string>) {
      if (state.company.id === action.payload) {
        state.company = initialState.company;
      }
    },
    deleteCompany(state, action: PayloadAction<string>) {
      state.companies = state.companies.filter(
        (company) => company.id !== action.payload
      );
    },
  },
});

export const {
  getCompanies,
  setCompanies,
  getInputData,
  setInputData,
  submitInputData,
  getCompany,
  editCompany,
  getCompanyId,
  deleteCompany,
} = companySlice.actions;

export default companySlice.reducer;
