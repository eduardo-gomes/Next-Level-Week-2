import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:44380'
})

export default api;