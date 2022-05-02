import React from 'react';

const RegisterRows = () => {
	let loginDefaultValue = 'Логин';
	let passwordDefaultValue = 'Пароль';
	let confirmPasswordDefaultValue = 'Подтвердите пароль';
	let emailDefaultValue = 'Электронная почта'

	return (
		<div className="register-form">
			<div className="register-rows-container">
				<div>Регистрация</div>
				<input className="auth-field" type="text" autoComplete="new-password" placeholder={loginDefaultValue}/>
				<input className="auth-field" type="password" autoComplete="new-password" placeholder={passwordDefaultValue}/>
				<input className="auth-field" type="password" autoComplete="new-password" placeholder={confirmPasswordDefaultValue}/>
				<input className="auth-field" type="email" autoComplete="new-password" placeholder={emailDefaultValue}/>
			</div>
		</div>
	);
};

export default RegisterRows;