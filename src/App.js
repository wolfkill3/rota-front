import './App.css';
import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import Authorize from './Authorize/Authorize';
import { Home } from './Home/Home';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes>
					<Route path="/login" element={<Authorize/>}/>
					<Route path="/home" element={<PrivateRoute/>}>
						<Route path="/home" element={<Home/>}/>
					</Route>
					<Route path="*" element={<Navigate to="/login"/>}/>
				</Routes>
			</div>
		);
	}
}

export default App;
