import PropTypes from 'prop-types';
import React from 'react';
import HeaderItem from './HeaderItem';
import './Header.css'

function Header(props) {
	return (
		<header className="header">
			{props.items.map((item) => {
				return <HeaderItem itemProperties={item.itemName} key={item.id.toString()}/>;
			})}
		</header>
	);
}

Header.propTypes =
	{
		items: PropTypes.arrayOf(PropTypes.object).isRequired,
		ruleLevel: PropTypes.number.isRequired
	};

export default Header;