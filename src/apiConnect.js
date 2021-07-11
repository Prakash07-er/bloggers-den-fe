import axios from "axios";

export default axios.create({
  baseURL: "https://blog-den-backend.herokuapp.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});