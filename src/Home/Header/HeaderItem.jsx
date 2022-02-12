import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

function HeaderItem(props) {
	return (
		<button className="header-item">
			{props.itemProperties}
		</button>
	);
}

HeaderItem.propTypes = {
	itemProperties: PropTypes.string.isRequired,
};

export default HeaderItem;