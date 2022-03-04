import React from 'react';
import { setCurrentPath } from '../Utils/Common';
import ProfileInfoBox from './ProfileInfoBox/ProfileInfoBox';
import Header from './Header/Header';
import HeaderItems from './Header/HeaderItems';
import ProfileBox from './ProfileBox/ProfileBox';
import Sidebar from './Sidebar/Sidebar';
import SidebarItems from './Sidebar/SidebarItems';
import './Home.css';

const Home = () => {
	setCurrentPath('/home');
	return (
		<div className="home">
			<Header items={HeaderItems()} ruleLevel={10}/>
			<div className="chest">
				{/*<Sidebar items={SidebarItems()} ruleLevel={10}/>*/}
				<div className="chest-profile-container">
					<ProfileBox/>
					<ProfileInfoBox/>
				</div>
			</div>
		</div>

	);
};

export { Home };