import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router';
import rest from '../../Utils/RestUtils';
import { getDefaultConfig, setUserSession } from './../../Utils/Common';

function LoginForm() {
	const login = useFormInput('');
	const password = useFormInput('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = () => {
		const data = { login: login.value, password: password.value };
		setError(null);
		setLoading(true);
		rest('/login', data, getDefaultConfig(), success, exception);

		function success(response) {
			setLoading(false);
			setUserSession(response.data.token, response.data.login, response.data.rulesLevel);
			console.log(response);
			navigate('/home');
		}

		function exception(e) {
			setLoading(false);
			if (e.response.status === 401) {
				setError(e.response.data.message);
			} else {
				setError('Something went wrong :(');
			}
		}
	};

	return (
		<div className="login-form">
			<div>Login</div>
			<div>Username</div>
			<input className="auth-field" type="text" {...login} autoComplete="new-password"/>
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
