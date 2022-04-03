import httpClient from '../http-coomon';

const authenticate = (data) => {
  return httpClient.post(`/login`, data);
};
const registerUser = (data) => {
  return httpClient.post(`/user/register`, data);
};
const getAll = () => {
  return httpClient.get(`/admin`);
};

const create = (data) => {
  return httpClient.post(`/admin/save`, data);
};

const get = (id) => {
  return httpClient.get(`/admin/${id}`);
};

const update = (data) => {
  return httpClient.put(`/admin/update`, data);
};

const remove = (id) => {
  return httpClient.delete(`/admin/${id}`);
};

const getAllSupplier = () => {
  return httpClient.get(`/salesman/user/supplier`);
};
const getAllSupplierBYProductId = (productId) => {
  return httpClient.get(`/salesman/prod-supply/${productId}`);
};
const getAddress = (Id) => {
  return httpClient.get(`/user/address/${Id}`);
};
const saveAddress = (user) => {
  return httpClient.post(`/user/completeProfile`, user);
};


export default { authenticate, registerUser, getAll, create, get, update, remove, getAllSupplier, getAllSupplierBYProductId, getAddress, saveAddress };