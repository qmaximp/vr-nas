import React from 'react';
import css from './RestaurantCatalog.module.scss'

const DishesCatalog = ({ children }: { children: any }) => {
	return (
		<div className={css.dishesCatalog}>
			<h2>Our Top<span>Restaurants</span></h2>
			<div className={css.dishesCatalog__catalogList}>
				{children}
			</div>
		</div>
	);
};

export default DishesCatalog;