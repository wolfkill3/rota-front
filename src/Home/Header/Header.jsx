import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';
import { getUser, removeUserSession } from '../../Utils/Common';
import './Header.css';
import logout from '../../resources/icons/logout.png'
import news from '../../resources/icons/news.png'
import pays from '../../resources/icons/pays.png'
import rating from '../../resources/icons/rating.png'
import info from  '../../resources/icons/info.png'

function Header(props) {
	const navigate = useNavigate();

	const handleLogout = () => {
		removeUserSession();
		navigate('/login');
	};

	return (
		<header className="header">
			<div className="header-container">
				<div className="header-top">
					<div className="header-item user-login">{getUser()}</div>
					<input className="header-item logout-button icon" type="image" src={logout} onClick={handleLogout} alt="Выйти"/>
				</div>
				<div className="header-bottom">
					<input className="header-item news-button icon" type="image" src={news} alt="Новости"/>
					<input className="header-item pays-button icon" type="image" src={pays} alt="Счета"/>
					<input className="header-item rating-button icon" type="image" src={rating} alt="Рейтинг"/>
					<input className="header-item rating-button icon" type="image" src={info} alt="Информация"/>
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