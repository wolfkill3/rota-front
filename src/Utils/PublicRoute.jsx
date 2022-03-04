import React from 'react';
import { Navigate } from 'react-router-dom';
import Authorize from '../Authorize/Authorize';
import { getCurrentPath, getToken } from './Common';

const PublicRoute = ({ to }) => {
	const auth = getToken();
	const currentPath = getCurrentPath();
	if (auth && currentPath !== to) {
		return <Navigate to={currentPath}/>;
	} else {
		return <Authorize/>;
	}
};

export default PublicRoute;