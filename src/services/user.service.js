import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/";

const getUserName = () => {
  return axios.get(API_URL + "username", {
    headers: authHeader(),
  });
};

const getList = (page, size) => {
  return axios.get(API_URL + `list?page=${page}&size=${size}`, {
    headers: authHeader(),
  });
};

const userService = {
  getUserName,
  getList,
};

export default userService;
