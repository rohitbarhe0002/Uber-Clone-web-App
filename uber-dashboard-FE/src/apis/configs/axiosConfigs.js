
import axios from "axios";
import { showModal } from "../../shared/ErrorModal";
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
});

const errorHandler = (error, showModal) => {
  const statusCode = error.response?.status;

  if (statusCode ) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    showModal(errorMessage);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(
  undefined,
  error => errorHandler(error, showModal)
);


