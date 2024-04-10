import FeaturesLeftSvg from '@/svgComponents/FeaturesLeftSvg';
import FeaturesRightSvg from '@/svgComponents/FeaturesRightSvg';
import React from 'react';
import css from './Features.module.scss'

const Features = () => {
	return (
		<div className={css.features}>
			<FeaturesLeftSvg />
			<div className={css.features__list}>
				<div className={css.list__block}>
					<h3>10K+</h3>
					<p>Satisfied Costumers</p>
					<p>All Great Over The World</p>
				</div>
				<span></span>
				<div className={css.list__block}>
					<h3>4M</h3>
					<p>Healthy Dishes Sold</p>
					<p>Including Milk Shakes Smooth</p>
				</div>
				<span></span>
				<div className={css.list__block}>
					<h3>99.99%</h3>
					<p>Reliable Customer Support</p>
					<p>We Provide Great Experiences</p>
				</div>
			</div>
			<FeaturesRightSvg />
		</div>
	);
};

export default Features; 