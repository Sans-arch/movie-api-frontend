import axios from 'axios';

const apiCaller = axios.create({
    baseURL: 'http://localhost:8099/api/movies',
});

export default apiCaller;