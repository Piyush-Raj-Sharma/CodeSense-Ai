import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://codesense-ai-8vfb.onrender.com", // ✅ Replace with your actual Render backend URL
});

export default axiosInstance;