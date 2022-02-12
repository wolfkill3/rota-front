import axios from 'axios';
import React, { useState } from 'react';
import './LoginForm.css';
import { getBaseUrl, setUserSession } from './../../Utils/Common';

function LoginForm(props) {
	const username = useFormInput('');
	const password = useFormInput('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// handle button click of login form
	const handleLogin = () => {
		setError(null);
		setLoading(true);
		axios.post(getBaseUrl() + '/login', { username: username.value, password: password.value }).then(response => {
			setLoading(false);
			setUserSession(response.data.token, response.data.user);
			props.history.push('/home');
		}).catch(error => {
			setLoading(false);
			if (error.response.status === 401) {
				setError(error.response.data.message);
			} else {
				setError('Something went wrong. Please try again later.');
			}
		});
	};

	return (
		<div className="login-form">
			<div>Login</div>
			<div>Username</div>
			<input className="auth-field" type="text" {...username} autoComplete="new-password"/>
			<div>Password</div>
			<input className="auth-field" type="password" {...password} autoComplete="new-password"/>
			{error && <><small style={{ color: 'red' }}>{error}</small></>}
			<input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}/>
		</div>
	);
}

const useFormInput = initialValue => {
	const [value, setValue] = useState(initialValue);

	const handleChange = e => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange,
	};
};

export default LoginForm;
