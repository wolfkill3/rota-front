import React from 'react';
import './ProfileBox.css';
import * as ReactDOM from 'react-dom';
import { getDefaultConfig, getToken, getUser } from '../../Utils/Common';
import rest from '../../Utils/RestUtils';
import UserProfile from './UserProfile';
import settings from '../../resources/icons/settings.png';
import approved from '../../resources/icons/approved.png';
import notification from '../../resources/icons/notification.png';
import userProfile from '../../resources/icons/profile.png';

function ProfileBox() {
	let profile;

	const ProfilePhoto = ({ data }) => <img className="profile-photo" src={`data:image/jpeg;base64,${data}`} alt="t"/>;
	const ProfileName = ({ data }) => <div>{data}</div>;

	const getProfile = () => {
		const data = { login: getUser(), token: getToken() };
		rest('/profile', data, getDefaultConfig(), success, exception);

		async function success(response) {
			profile = new UserProfile(response);
			let photo = await profile.getPhoto(getToken(), getUser());
			ReactDOM.render(<ProfilePhoto data={photo}/>, document.getElementById('profile-photo'));
			// ReactDOM.render(<ProfileName data={profile.getFIO()}/>, document.getElementById('profile-name'));

			ReactDOM.render(<div className="p-info-text">Имя: {profile.firstName}</div>, document.getElementById('profile-first-name'));
			ReactDOM.render(<div className="p-info-text">Фамилия: {profile.middleName}</div>, document.getElementById('profile-middle-name'));
			ReactDOM.render(<div className="p-info-text">Отчество: {profile.lastName}</div>, document.getElementById('profile-last-name'));
			ReactDOM.render(<div className="p-info-text">Возраст: {profile.age}</div>, document.getElementById('profile-age'));
			ReactDOM.render(<div className="p-info-text">Дата рождения: {profile.dateOfBirth}</div>, document.getElementById('profile-date-of-birth'));
			ReactDOM.render(<div className="p-info-text">Город: {profile.city}</div>, document.getElementById('profile-city'));
			ReactDOM.render(<div className="p-info-text">Рейтинг: {profile.rating}</div>, document.getElementById('profile-rating'));
		}

		function exception(e) {
		}
	};

	getProfile();

	return (
		<div className="profile-box p-box p-box-all">
			<div className="p-box-container p-box-all">
				<div className="p-box-field p-box-all">
					<div className="p-box-photo p-box-all">
						<div id="profile-photo"/>
						<div className="p-info p-box-all">
							<div className="p-info-container p-box-all">
								<div id="profile-first-name" className="p-info-first-name p-info-text">Имя:</div>
								<div id="profile-middle-name" className="p-info-middle-name p-info-text">Фамилия:</div>
								<div id="profile-last-name" className="p-info-last-name p-info-text">Отчество:</div>
								<div id="profile-age" className="p-info-age p-info-text">Возраст:</div>
								<div id="profile-date-of-birth" className="p-info-date-of-birth p-info-text">Дата рождения:</div>
								<div id="profile-city" className="p-info-city p-info-text">Город:</div>
								<div id="profile-rating" className="p-info-rating p-info-text">Рейтинг:</div>
							</div>
						</div>
					</div>
					<div className="p-icon-container">
						<input className="p-icon" type="image" src={userProfile} alt="Настройки"/>
						<input className="p-icon" type="image" src={approved} alt="Настройки"/>
						<input className="p-icon" type="image" src={settings} alt="Настройки"/>
						<input className="p-icon" type="image" src={notification} alt="Настройки"/>
					</div>
					<div id="profile-name" className="profile-name"/>
				</div>
			</div>
		</div>
	);
}

export default ProfileBox;