import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';
import { removeUserSession } from '../../Utils/Common';
import './Header.css'

function Header(props) {
	const navigate = useNavigate();

	const handleLogout = () => {
		removeUserSession();
		navigate('/login')
	}

	return (
		<header className="header">
			<input className='logout-button' type='button' value='Выйти' onClick={handleLogout}/>
		</header>
	);
}

Header.propTypes =
	{
		items: PropTypes.arrayOf(PropTypes.object).isRequired,
		ruleLevel: PropTypes.number.isRequired
	};

export default Header;