import axios from "axios";

export default axios.create({
  baseURL: "https://bloggers-den-be.herokuapp.com/api/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});