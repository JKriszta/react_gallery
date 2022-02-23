import React from 'react';
import { NavLink } from 'react-router-dom';

export const MyNavbar =(props) => {


	return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
				<div className="container-fluid">
					<span className="navbar-brand">💢</span>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to="/" className="nav-link" aria-current="page"
								style={({isActive})=>({color: isActive ? 'green' : 'black'})}
								>Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link"
								style={({isActive})=>({color: isActive ? 'green' : 'black'})}
								>About</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/offers" className="nav-link"
								style={({isActive})=>({color: isActive ? 'green' : 'black'})}
								>Offers</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/gallery" className="nav-link"
								style={({isActive})=>({color: isActive ? 'green' : 'black'})}
								>Gallery</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/products" className="nav-link"
								style={({isActive})=>({color: isActive ? 'green' : 'black'})}
								>Products</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	);
}