import axios from 'axios';

export const Request = {
  async getMethod(params) {
    return await axios({
      method: 'get',
      url: `https://pokeapi.co/${params.url}`,
      timeout: 30000,
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded; charset=UTF-8; multipart/form-data; application/json',
        Accept: 'application/json',
      },
      params: params.params,
    }).then(function(response) {
      return response;
    });
  },

  async postMethod(params) {
    return await axios({
      method: 'post',
      url: `https://pokeapi.co/${params.url}`,
      timeout: 30000,
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded; charset=UTF-8; multipart/form-data; application/json',
        Accept: 'application/json',
      },
      params: params.body,
    }).then(function(response) {
      return response;
    });
  },
};
