import React from 'react';
import { setCurrentPath } from '../Utils/Common';
import LoginForm from './LoginForm/LoginForm';
import './Authorize.css';

const Authorize = () => {
	setCurrentPath('/login');
	return (
		<div className="authorize">
			<LoginForm/>
		</div>
	);
};

export default Authorize;