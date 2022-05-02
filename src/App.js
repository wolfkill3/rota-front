import './App.css';
import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Registration from './Registration/Registration';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import Authorize from './Authorize/Authorize';
import { Home } from './Home/Home';
import {Rating} from  './Rating/Rating'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes>
					<Route path="/login" element={<PublicRoute to ={"/login"}/>}>
						<Route path="/login" element={<Authorize/>}/>
					</Route>
					<Route path="/registration" element={<PublicRoute to ={"/registration"}/>}>
						<Route path="/registration" element={<Registration/>}/>
					</Route>
					<Route path="/home" element={<PrivateRoute/>}>
						<Route path="/home" element={<Home/>}/>
					</Route>
					<Route path="/rating" element={<PrivateRoute/>}>
						<Route path="/rating" element={<Rating/>}/>
					</Route>
					<Route path="*" element={<Navigate to="/login"/>}/>
				</Routes>
			</div>
		);
	}
}

export default App;
