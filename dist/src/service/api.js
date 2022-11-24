"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios = require('axios');
exports.api = axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache',
    },
});
//# sourceMappingURL=api.js.map