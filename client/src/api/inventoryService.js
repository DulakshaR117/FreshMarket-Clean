import api from "./api";

const getAll = async () => {
  const response = await api.get("/inventory");
  return response.data;
};

const getById = async (id) => {
  const response = await api.get(`/inventory/${id}`);
  return response.data;
};

const create = async (data) => {
  const response = await api.post("/inventory", data);
  return response.data;
};

const update = async (id, data) => {
  const response = await api.put(`/inventory/${id}`, data);
  return response.data;
};

const increase = async (id, quantity) => {
  const response = await api.put(`/inventory/${id}/increase`, {
    quantity,
  });

  return response.data;
};

const decrease = async (id, quantity) => {
  const response = await api.put(`/inventory/${id}/decrease`, {
    quantity,
  });

  return response.data;
};

const remove = async (id) => {
  await api.delete(`/inventory/${id}`);
};

const inventoryService = {
  getAll,
  getById,
  create,
  update,
  increase,
  decrease,
  delete: remove,
};

export default inventoryService;