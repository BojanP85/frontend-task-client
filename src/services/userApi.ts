import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export function getUsersAPI() {
  return axios.request({
    method: "get",
    url: "/users",
  });
}
