import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://quotes-92697.firebaseio.com/'
});

export default axiosOrders;