import axios from 'axios';
import { getBaseUrl } from '../../Utils/Common';

class UserProfile {
	constructor(response) {
		this.firstName = response.data.firstName;
		this.middleName = response.data.middleName;
		this.lastName = response.data.lastName;
		this.age = response.data.age;
		this.dateOfBirth = response.data.dateOfBirth;
		this.rating = response.data.rating;
		this.city = response.data.city;
		console.log(this);
	}

	getFIO() {
		return this.middleName + ' ' + this.firstName + ' ' + this.lastName;
	}

	getPhoto(token, login) {
		return axios.get(getBaseUrl() + `/profile/photo?token=${token}&login=${login}`)
			.then((response) => {
				return success(response);
			}).catch((e) => {
				return exception(e);
			});

		function success(response) {
			return response.data;
		}

		function exception(e) {
		}
	}
}

export default UserProfile;
