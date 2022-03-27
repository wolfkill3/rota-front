import React from 'react';
import { getUserRulesLevel, setCurrentPath } from '../Utils/Common';
import ProfileInfoBox from './ProfileInfoBox/ProfileInfoBox';
import Header from './Header/Header';
import HeaderItems from './Header/HeaderItems';
import ProfileBox from './ProfileBox/ProfileBox';
import './Home.css';

const Home = () => {
	setCurrentPath('/home');
	return (
		<div className="home">
			<Header items={HeaderItems()} ruleLevel={getUserRulesLevel()}/>
			<div className="chest">
				<div className="chest-profile-container">
					<ProfileBox/>
					<ProfileInfoBox/>
				</div>
			</div>
		</div>

	);
};

export { Home };