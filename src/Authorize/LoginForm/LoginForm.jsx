import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router';
import restPost from '../../Utils/RestPost';
import { getDefaultConfig, setUserSession } from './../../Utils/Common';
import loginIcon from '../../resources/icons/login2.png'
import loadingGif from '../../resources/icons/spiner-1.png'

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
		restPost('/login', data, getDefaultConfig(), success, exception);

		function success(response) {
			setLoading(false);
			setUserSession(response.data.token, response.data.login, response.data.rulesLevel);
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
 //value={loading ? 'Вход' : 'Войти'}
	return (
		<div className="login-form">
			<div>Авторизация</div>
			<input className="auth-field" type="text" {...login} autoComplete="new-password" placeholder={loginDefaultValue}/>
			<input className="auth-field" type="password" {...password} autoComplete="new-password" placeholder={passwordDefaultValue}/>
			<input className={loading ? "login-button button icon rotate" : "login-button button icon"} type="image" src={loading ? loadingGif : loginIcon} onClick={handleLogin} disabled={loading} alt="Войти"/>
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
