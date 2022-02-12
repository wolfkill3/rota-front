import React from 'react';
import Header from './Header/Header';
import HeaderItems from './Header/HeaderItems';
import ProfileBox from './ProfileBox/ProfileBox';
import Sidebar from './Sidebar/Sidebar';
import SidebarItems from './Sidebar/SidebarItems';

const Home = () => {
		return (
			<div className="home">
				<Header className="head" items={HeaderItems()} ruleLevel={10}/>
				<div className="chest">
					<Sidebar items={SidebarItems()} ruleLevel={10}/>
					<ProfileBox/>
				</div>
			</div>

		);
}

export {Home}