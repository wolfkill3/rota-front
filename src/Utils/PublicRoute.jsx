import React from 'react';
import { Navigate } from 'react-router-dom';
import Registration from '../Registration/Registration';
import Authorize from '../Authorize/Authorize';
import { getCurrentPath, getToken } from './Common';

const PublicRoute = ({ to }) => {
	const auth = getToken();
	const currentPath = getCurrentPath();
	if (auth && currentPath !== to) {
		return <Navigate to={currentPath}/>;
	} else if (auth == null && to === '/registration') {
		return <Registration/>;
	} else {
		return <Authorize/>;
	}
};

export default PublicRoute;