import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import Products from './components/Products';
import Login from './components/Login'

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<main id = 'contents'>
					<div className="">
						<Login/>
					</div>
				</main>
				<Footer/>
			</div>
		);
	}
}
export default App;
