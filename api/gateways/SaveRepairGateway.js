const {makePostRequest} = require('./apiRequester');

module.exports = async ({body}) => {
  let result;

  result = await makePostRequest({
    url: '/RepairRequests',
    body
  }).then(response => {
    return response.data;
  }).catch(error => {
    console.error(error);
    if (error.status >= 400) {
      return new Error('Error saving');
    }
  })

  return result;
};
