import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header/>
					<main id = 'contents'>
						<div className="">
							{this.showContentMenus(routes)}
						</div>
					</main>
					<Footer/>
				</div>
			</Router>
		);
	}

	showContentMenus = (routes) => {
		var result = null;
		if(routes.length > 0){
			result = routes.map((route, index) => {
				return (
					<Route 
						key = {index}
						path = {route.path}
						exact = {route.exact}
						component = {route.main}
					/>
				);
			})
		}

		return <Switch>{result}</Switch>
	}
}
export default App;
