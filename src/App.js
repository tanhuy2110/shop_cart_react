import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Content from './components/Content'

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<main id = 'contents'>
					<div className="container">
						<Content/>
					</div>
				</main>
				<Footer/>
			</div>
		);
	}
}
export default App;
