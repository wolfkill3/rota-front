import PropTypes from 'prop-types';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import restGet from '../../Utils/RestGet';
import { getUser, removeUserSession } from '../../Utils/Common';
import './Header.css';
import logout from '../../resources/icons/logout.png';
import news from '../../resources/icons/news.png';
import pays from '../../resources/icons/pays.png';
import rating from '../../resources/icons/rating.png';
import info from '../../resources/icons/info.png';
import reactLogo from '../../resources/icons/logo192.png';
import springLogo from '../../resources/icons/springLogo.png';
import javaLogo from '../../resources/icons/javaLogo.png';

function Header(props) {
	const HeaderPhoto = ({ data }) => <img className="header-item header-photo" src={`data:image/jpeg;base64,${data}`} alt="t"/>;
	const navigate = useNavigate();

	const handleLogout = () => {
		removeUserSession();
		navigate('/login');
	};

	const getHeaderPhoto = () => {
		let data = {

		}
		restGet('/header/photo', data, success, exception);

		async function success(response) {
			ReactDOM.render(<HeaderPhoto data={response.data}/>, document.getElementById('header-photo'));
		}

		function exception(e) {
		}
	}

	getHeaderPhoto();

	return (
		<header className="header">
			<div className="header-container">
				<div className="header-top">
					<div className="header-left-icons header-icons">
						<img className="header-item" src={javaLogo} alt=""/>
						<img className="header-item" src={springLogo} alt=""/>
						<img className="header-item" src={reactLogo} alt=""/>
					</div>
					<div className="header-central-icons header-icons">
						<input className="header-item news-button icon" type="image" src={news} alt="Новости"/>
						<input className="header-item pays-button icon" type="image" src={pays} alt="Счета"/>
						<input className="header-item rating-button icon" type="image" src={rating} alt="Рейтинг"/>
						<input className="header-item rating-button icon" type="image" src={info} alt="Информация"/>
					</div>
					<div className="header-right-icons header-icons">
						<div className="user-login">{getUser()}</div>
						<div id="header-photo" className="header-photo-pre-render"/>
						<input className="header-item logout-button icon" type="image" src={logout} onClick={handleLogout} alt="Выйти"/>
					</div>
				</div>
			</div>
		</header>
	);
}

Header.propTypes =
	{
		items: PropTypes.arrayOf(PropTypes.object).isRequired,
		ruleLevel: PropTypes.number.isRequired,
	};

export default Header;