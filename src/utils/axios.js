import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8183",
  headers: {
    "content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

export const apiProduct = axios.create({
  baseURL: "http://localhost:8184",
  headers: {
    "content-type": "application/json",
  },
});

export const apiMerchant = axios.create({
  baseURL: "http://localhost:8185",
});

export const apiOrders = axios.create({ baseURL: "http://localhost:8187" });
