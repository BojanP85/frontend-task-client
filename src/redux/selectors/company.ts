import { RootState } from "../../types";
import { initialState } from "../slice/company";

export const getCompanyState = (state: RootState) =>
  state.company || initialState;
