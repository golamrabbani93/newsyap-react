import React, {useEffect, useState} from 'react';
import Menu from '../Menu/Menu';

const Menus = () => {
	const [news, setNews] = useState([]);
	const loadNewsData = (id, name) => {
		const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
		try {
			fetch(url)
				.then((res) => res.json())
				.then((data) => setNews(data));
		} catch (error) {
			console.log(error);
		}
	};

	console.log(news);
	const [menus, setMenus] = useState([]);
	useEffect(() => {
		const url = 'https://openapi.programming-hero.com/api/news/categories';
		fetch(url)
			.then((res) => res.json())
			.then((menus) => setMenus(menus.data.news_category));
	}, []);
	return (
		<div className="container">
			<button
				className="navbar-toggler mx-auto"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div id="category-box" className="navbar-nav mx-auto">
					{menus.map((menu) => (
						<Menu menu={menu} key={menu.category_id} loadNewsData={loadNewsData}></Menu>
					))}
				</div>
			</div>
		</div>
	);
};

export default Menus;
