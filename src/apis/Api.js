import axios from "axios";

let BaseApi = axios.create({
	baseURL: "https://b26cbe65c4ca.ngrok.io/api",
});

let Api = function() {
  let token = localStorage.getItem("token");

  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return BaseApi;
};

export default Api;
