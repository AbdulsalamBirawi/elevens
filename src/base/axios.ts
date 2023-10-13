import { BASE_API_URL } from '../../constants/settings';
import _axios from 'axios';

const axios = _axios.create({
	baseURL: BASE_API_URL,
});



export default axios;
