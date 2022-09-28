import React from 'react';
import avatar from '../../img/Avatar.png';
import Menus from '../Menus/Menus';

const Header = () => {
	return (
		<header>
			<div className="top-header pt-3 pt-sm-5">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="logo">
								<a
									href="/home"
									className="navbar-brand logo-text font-24 fw-700 text-center text-md-start d-block"
									id="home"
								>
									News<span className="color-primary">Yap</span>
								</a>
							</div>
						</div>
						<div className="col-md-6 text-end">
							<div className="user list-unstyled d-flex justify-content-center justify-content-md-end align-items-center">
								<li className="nav-item mx-3 active-link">
									<a className="nav-link" href="/news" id="news">
										News
									</a>
								</li>
								<li className="nav-item mx-3">
									<a className="nav-link" href="blog" id="blog">
										Blog
									</a>
								</li>

								<li className="nav-item mx-3">
									<a className="nav-link" href="/profile">
										<img src={avatar} alt="" />
									</a>
								</li>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg mt-3 mt-sm-5">
				<Menus></Menus>
			</nav>
		</header>
	);
};

export default Header;
