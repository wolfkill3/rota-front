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
			<div className="header-item user-login">{getUser()}</div>
			<input className="header-item logout-button" type="button" value="Выйти" onClick={handleLogout}/>
		</header>
	);
}

Header.propTypes =
	{
		items: PropTypes.arrayOf(PropTypes.object).isRequired,
		ruleLevel: PropTypes.number.isRequired,
	};

export default Header;