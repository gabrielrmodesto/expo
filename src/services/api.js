import axios from 'axios';

const api = axios.create({
	baseURL: 'https://github.com/gabrielrmodesto/omniinstagram.git'
});
export default api;
