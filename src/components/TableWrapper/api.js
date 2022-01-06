import axios from "axios";

const api = axios.create({
  baseURL: "https://api-vehicle-report-manager.herokuapp.com/"
});

export default api;
