import React from 'react';
import css from './RestaurantCatalog.module.scss'
import RestaurantCatalogItem from '../RestaurantCatalogItem/RestaurantCatalogItem';


const RestaurantCatalog = () => {
	return (
		<div className={css.restaurantCatalog}>
			<h2>Our Top<span>Restaurants</span></h2>
			<div className={css.restaurantCatalog__catalogList}>
				<RestaurantCatalogItem tagName={'trending'} title={'Chicken Hell'} deliveryTime={48} estimation={'4.8'} />
				<RestaurantCatalogItem tagName={'healthy'} title={'Chicken Hell'} deliveryTime={48} estimation={'4.8'} />
				<RestaurantCatalogItem tagName={'supreme'} title={'Chicken Hell'} deliveryTime={48} estimation={'4.8'} />
			</div>
		</div>
	);
};

export default RestaurantCatalog;