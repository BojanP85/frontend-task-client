import axios from "axios";

import { CompanyModel, FetchCompaniesPayload } from "../types";

axios.defaults.baseURL = "http://localhost:8000";

export function getCompaniesAPI({ page, numberOfRows }: FetchCompaniesPayload) {
  return axios.request({
    method: "get",
    url: `/companies?_page=${page}&_limit=${numberOfRows}`,
  });
}

export function editCompanyAPI(company: CompanyModel) {
  return axios.request({
    method: "put",
    url: `/companies/${company.id}`,
    data: company,
  });
}

export function deleteCompanyAPI(id: string) {
  return axios.request({
    method: "delete",
    url: `/companies/${id}`,
  });
}
