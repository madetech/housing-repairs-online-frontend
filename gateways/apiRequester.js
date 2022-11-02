require('dotenv').config();

module.exports = (axios) => {
  return {
    makeGetRequest: ({ uri, params = {} }) => {
      var baseUrl = process.env.REPAIRS_API_BASE_URL;
      const axiosInstance = axios.create({
        baseURL: baseUrl,
      });
      return axiosInstance.get(uri, {
        params: params,
      });
    },

    makePostRequest: ({ uri, body = {} }) => {
      var baseUrl = process.env.REPAIRS_API_BASE_URL;
      const axiosInstance = axios.create({
        baseURL: baseUrl,
      });
      return axiosInstance.post(uri, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  };
};
