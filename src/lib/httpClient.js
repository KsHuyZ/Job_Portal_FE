import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});
const userInfo = localStorage.getItem("userInfo");
const userJSON = JSON.parse(userInfo);
if (userJSON?.token) {
  httpClient.defaults.headers.common["Authorization"] = userJSON.token;
}
export default httpClient;
