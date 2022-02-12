import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import './Sidebar.css'

function Sidebar(props) {
	return (
		<aside className="sidebar">
			{props.items.map((item) => {
				return <SidebarItem itemProperties={item.itemName} key={item.id.toString()}/>;
			})}
		</aside>
	);
}

Sidebar.propTypes =
{
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	ruleLevel: PropTypes.number.isRequired
};

export default Sidebar;