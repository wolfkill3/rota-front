import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';
import { getUser, removeUserSession } from '../../Utils/Common';
import './Header.css';

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
					<input className="header-item logout-button" type="button" value="Выйти" onClick={handleLogout}/>
				</div>
				<div className="header-bottom">
					<input className="header-item news-button" type="button" value="Новости"/>
					<input className="header-item pays-button" type="button" value="Счета"/>
					<input className="header-item rating-button" type="button" value="Рейтинг"/>
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