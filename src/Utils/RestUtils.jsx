import axios from 'axios';
import { getBaseUrl } from './Common';

function rest(url, data, config, success, error){
	axios.post(getBaseUrl() + url, data, config)
		.then((response) => {
			return success(response);
		}).catch((e) => {
		return error(e);
	});
}

export default rest;