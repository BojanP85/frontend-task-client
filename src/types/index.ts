import { ChangeEvent, SetStateAction } from "react";

/* RootState */

export interface RootState {
  user: UserState;
  company: CompanyState;
}

/* User types */

export interface UserModel {
  email: string;
  password: string;
  name: string;
  surname: string;
  logout: boolean;
}

export interface UserState {
  user: UserModel;
  users: UserModel[];
  loading: LoadingUserModel;
  errors: InputErrorModel;
}

export interface LoggedUserModel {
  name: string;
  surname: string;
}

export interface LoadingUserModel {
  submitLoading: boolean;
}

export interface InputErrorModel {
  email: string;
  password: string;
}

/* Company types */

export interface CompanyModel {
  id: string;
  name: string;
  email: string;
  createdBy: string;
  updatedBy: string;
  date: string;
}

export interface CompanyState {
  company: CompanyModel;
  companies: CompanyModel[];
  loading: LoadingCompanyModel;
}

export interface LoadingCompanyModel {
  fetchLoading: boolean;
  submitLoading: boolean;
}

export interface FetchCompaniesPayload {
  page: number;
  numberOfRows: string;
}

/* SignInForm component types */

export interface SignInFormProps {
  handleOpen: () => void;
}

/* CustomTooltip component types */

export interface CustomTooltipProps {
  children: JSX.Element;
  company: CompanyModel;
  handleDeleteCompany: () => void;
}

/* CustomModal component types */

export interface CustomModalProps {
  children: JSX.Element;
  open: boolean;
  handleClose: () => void;
}

/* ModalContent component types */

export interface ModalContentProps {
  tooltipOption: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  companyObject: CompanyModel;
  dateValue: string;
  setDateValue: (value: SetStateAction<string>) => void;
}

/* Header component types */

export interface HeaderProps {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

/* Sidebar component types */

export interface SidebarProps {
  loggedUserObject: LoggedUserModel;
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}
