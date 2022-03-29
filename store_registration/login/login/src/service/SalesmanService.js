import httpClient from '../http-coomon';

const get = (id) => {
    return httpClient.get(`/user/${id}`);
  };


  const getAll = () => {
    return httpClient.get(`/admin`);
  };

  export default {get,getAll};