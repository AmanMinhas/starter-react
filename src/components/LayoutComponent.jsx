import React, {Component} from 'react';
import { Link } from 'react-router';

export default class LayoutComponent extends Component {
	render () {
		return (
			<div className = "app-container">
				{/*Navbar*/}
				<div className = "navbar">
					This is Navbar
				</div>

				{/*AppContent*/}
				<div className="app-content">
					{this.props.children}
				</div>
				
				{/*Footer*/}
				<div className = "Footer">
					This is Footer
				</div>

			</div>
		);
	}
}
