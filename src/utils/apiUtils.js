import axios from "axios";

export const executeGet = (url) => axios.get(url);
export const executeDelete = (url) => axios.delete(url);
export const executePost = (url, data) => axios.post(url, data);
export const executePut = (url, data) => axios.put(url, data);
export const executePatch = (url, data) => axios.patch(url, data);
