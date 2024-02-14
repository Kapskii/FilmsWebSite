import axios from "axios";

export const API_KEY = "f4bb5234-9a62-4157-b4a4-eba90d57491b";

export const instance = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/",
  headers: {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  },
});
