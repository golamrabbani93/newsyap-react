import React from 'react';

const Menu = (props) => {
	const {loadNewsData, menu} = props;
	const {category_id, category_name} = menu;
	return (
		<a
			onClick={() => loadNewsData(category_id)}
			className="nav-link  mx-3"
			aria-current="page"
			href="#o"
		>
			{category_name}
		</a>
	);
};

export default Menu;
