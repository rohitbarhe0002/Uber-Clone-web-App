import axios from "axios"

export const api = axios.create({
  baseURL:process.env.REACT_APP_BASE_URL,
  headers: {'Authorization': 'Bearer '+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTU1Mzk2ODEzM2Y4MzM1OWFiYzEwZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODc1MTM2OTYsImV4cCI6MTY4NzUxMzcwMX0.YJPlF-fPzqSQvnjTklDxcm3nouOpLO7mTtHVjivKJPs"}
})
// defining a custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error)
  }
  return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})