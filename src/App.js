import './App.css';
import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Authorize from './Authorize/Authorize';
import { Home } from './Home/Home';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes>
					<Route path="/home" element={<Home/>}/>
					<Route path="/login" element={<Authorize/>}/>
					<Route path="*" element={<Navigate to="/login"/>}/>
				</Routes>
			</div>
		);
	}
}

export default App;
