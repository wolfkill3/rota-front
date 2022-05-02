import React from 'react';
import { setCurrentPath } from '../Utils/Common';
import RegisterForm from './RegisterForm/RegisterForm';
import './Registration.css';

const Registration = () => {
	setCurrentPath('/registration');
	return (
		<div className="signup">
			<RegisterForm/>
		</div>
	);
};

export default Registration;