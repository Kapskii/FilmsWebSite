import axios from "axios";


export const API_KEY = "e620e2ec-051b-405b-95c7-251e30a51950";

export const instance = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/",
  headers: {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  },
});
