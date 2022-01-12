require('dotenv').config()
const axios = require('axios');

const makeGetRequest = ({url, params ={}}) =>{
  var identifier = process.env.REPAIRS_API_IDENTIFIER
  var baseUrl = process.env.REPAIRS_API_BASE_URL;
  const axiosInstance = axios.create({
    baseURL: baseUrl
  })
  return axiosInstance.post(`/authentication?identifier=${identifier}`)
    .then(response => {
      var jwt = response.data;
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      return axiosInstance.get(url, {
        params: params
      });
    })
}

const makePostRequest = ({url, body ={}}) =>{
  var identifier = process.env.REPAIRS_API_IDENTIFIER
  var baseUrl = process.env.REPAIRS_API_BASE_URL;
  const axiosInstance = axios.create({
    baseURL: baseUrl
  })
  return axiosInstance.post(`/authentication?identifier=${identifier}`)
    .then(response => {
      var jwt = response.data;
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      return axiosInstance.post(url, body);
    })
}

module.exports = {
  makeGetRequest, makePostRequest
}
