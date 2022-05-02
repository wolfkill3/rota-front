import React from 'react';
import { getUserRulesLevel, setCurrentPath } from '../Utils/Common';
import ProfileRatingBox from './ProfileRatingBox/ProfileRatingBox';
import Header from '../Header/Header';
import HeaderItems from '../Header/HeaderItems';
import './Rating.css';

const Rating = () => {
	setCurrentPath('/rating');
	return (
		<div className="rating">
			<Header items={HeaderItems()} ruleLevel={getUserRulesLevel()}/>
			<div className="chest">
				<div className="chest-rating-container">
					<ProfileRatingBox/>
				</div>
			</div>
		</div>

	);
};

export { Rating };