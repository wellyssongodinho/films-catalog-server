// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

export const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache',
  },
});

// module.exports = { api };
