import axios from 'axios';
import { getBaseUrl } from './Common';

function restGet(url, data, success, error) {
	let queryString = new URLSearchParams(data).toString();
	axios.get(getBaseUrl() + url + queryString)
		.then((response) => {
			return success(response);
		}).catch((e) => {
		return error(e);
	});
}

export default restGet;