import React from 'react';
import PropTypes from 'prop-types';
import './SidebarItem.css'

function SidebarItem(props) {
	return (
		<button className="sidebar-item">
			{props.itemProperties}
		</button>
	);
}

SidebarItem.propTypes = {
	itemProperties: PropTypes.string.isRequired,
};

export default SidebarItem;