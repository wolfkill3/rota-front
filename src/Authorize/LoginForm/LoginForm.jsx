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
	let loginDefaultValue = 'Логин';
	let passwordDefaultValue = 'Пароль';

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
				setError('Что-то пошло не так :(');
			}
		}
	};

	return (
		<div className="login-form">
			<div>Авторизация</div>
			<input className="auth-field" type="text" {...login} autoComplete="new-password" placeholder={loginDefaultValue}/>
			<input className="auth-field" type="password" {...password} autoComplete="new-password" placeholder={passwordDefaultValue}/>
			<input className="login-button button" type="button" value={loading ? 'Вход' : 'Войти'} onClick={handleLogin} disabled={loading}/>
			<div className="error-place">
				{error && <><small style={{ color: 'black' }}>{error}</small></>}
			</div>
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
