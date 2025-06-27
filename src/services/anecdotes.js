import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;

console.log("BASE_URL_BACKEND", baseUrl);

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content);
  return response.data;
};

const updatePartial = async (id, part) => {
  const response = await axios.patch(`${baseUrl}/${id}`, part);
  return response.data;
};

export default {
  getAll,
  getById,
  createNew,
  update,
  updatePartial,
};
