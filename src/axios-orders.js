import axios from 'axios';

const instance = axios.create({
    baseURL: 'INSERT LINK TO FIREBASE DATABASE'
});

export default instance;
