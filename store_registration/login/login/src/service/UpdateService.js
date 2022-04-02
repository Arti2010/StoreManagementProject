import httpClient from '../http-coomon';
const get = (userId) => {
    return httpClient.get(`/salesman/profile/${userId}`);
  };


  export default { get}