import axios from "axios";

const API = axios.create({

   baseURL: "https://teamtaskmanager-production-9832.up.railway.app/"

});

API.interceptors.request.use((req) => {

   const token = localStorage.getItem("token");

   if(token){

      req.headers.Authorization = token;

   }

   return req;

});

export default API;