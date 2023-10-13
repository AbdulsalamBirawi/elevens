import { BASE_URL } from '../../constants/settings';
import _axios from 'axios';

const axios = _axios.create({
	baseURL: BASE_URL,
});

export default axios;
