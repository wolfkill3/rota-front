const baseUrl = 'http://localhost:8080';
const baseAddress = '/api/v1/test'; //"test" - to test api, later to be removed

export const getBaseUrl = () => {
	return baseUrl + baseAddress;
};

export const getDefaultConfig = () => {
	return {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	};
};

export const setCurrentPath = (path) => {
	sessionStorage.setItem('currentPath', path);
	console.log(path);
};

export const getCurrentPath = () => {
	return sessionStorage.getItem('currentPath');
};

export const getUser = () => {
	const userLogin = sessionStorage.getItem('user');
	if (userLogin) {
		return JSON.parse(userLogin);
	} else {
		return null;
	}
};

export const getUserRulesLevel = () => {
	const userRulesLevel = sessionStorage.getItem('rulesLevel');
	if (userRulesLevel) {
		return JSON.parse(userRulesLevel);
	} else {
		return 0;
	}
};
// return the token from the session storage
export const getToken = () => {
	return sessionStorage.getItem('token') || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
	sessionStorage.removeItem('token');
	sessionStorage.removeItem('user');
	sessionStorage.removeItem('rulesLevel');
};

// set the token and user from the session storage
export const setUserSession = (token, user, rulesLevel) => {
	sessionStorage.setItem('token', token);
	sessionStorage.setItem('user', JSON.stringify(user));
	sessionStorage.setItem('rulesLevel', JSON.stringify(rulesLevel));
};