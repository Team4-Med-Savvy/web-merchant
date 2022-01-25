import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

export const apiProduct = axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    "content-type": "application/json",
  },
});
