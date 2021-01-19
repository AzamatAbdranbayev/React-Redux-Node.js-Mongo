import axios from "axios";
export const baseUrl = "http://localhost:8000";
export const baseImg =
  "https://gdb.rferl.org/896C5DE4-4A05-4ABF-8A65-98757BCE519C_w1080_h608.jpg";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
