import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b8c9379b7c21463494915f8334c4f7d2"
  }
});