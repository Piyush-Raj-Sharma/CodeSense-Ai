import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://codesense-ai-8vfb.onrender.com",
});

export default axiosInstance;