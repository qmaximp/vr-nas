import React from 'react';
import css from './RestaurantCatalogItem.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import TagName from '@/components/UI/TagName';

interface Props {
	tagName: string
	title: string
	deliveryTime: number
	estimation: string
}

const RestaurantCatalogItem = ({ tagName, title, deliveryTime, estimation }: Props) => {
	return (
		<Link href={'/'}>
			<div className={css.restaurantCatalogItem}>
				<img src='https://placehold.co/400x180' alt='123' />
				<div className={css.restaurantCatalogItem__info}>
					<TagName type={tagName} />
					<h4>{title}</h4>
					<div className={css.restaurantCatalogItem__infoDescription}>
						<p>{deliveryTime}min</p>
						<p>{estimation}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default RestaurantCatalogItem;