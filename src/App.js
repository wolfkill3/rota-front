import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home} from './Home/Home';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes>
					<Route path='/home' element={<Home/>} />
					{/*<Route from='/' to='/home'/>*/}
				</Routes>
			</div>
		);
	}
}

export default App
