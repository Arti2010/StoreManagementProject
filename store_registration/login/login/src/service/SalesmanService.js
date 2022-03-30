import httpClient from '../http-coomon';

const get = (id) => {
  return httpClient.get(`/user/${id}`);
};


const getAll = () => {
  return httpClient.get(`/admin`);
};

const getAllCat = () => {
  return httpClient.get(`/salesman/category`);
};

const getProductbyCatName = (catId) => {
  return httpClient.get(`/salesman/category/${catId}`);
};
const update = (data) => {
  return httpClient.put(`/salesman/products/update`, data);
};
const create = (data) => {
  return httpClient.post(`/salesman/products/save`, data);
};

const remove = (id) => {
  return httpClient.delete(`/salesman/products/delete/${id}`);
};
const getProduct = (id) => {
  return httpClient.get(`/salesman/products/${id}`);
};
const AddCategory = (data) => {
  return httpClient.post(`/salesman/category/save`, data);
}

const removeCategory = (id) => {
  return httpClient.delete(`/salesman/category/delete/${id}`);
};

export default { get, getAll, getAllCat, getProductbyCatName, update, create, remove, getProduct, AddCategory, removeCategory }