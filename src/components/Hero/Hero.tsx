import HeroSvg from '@/svgComponents/HeroSvg';
import React from 'react';
import css from './Hero.module.scss'
import Button from '../UI/Button';

const Hero = () => {
	return (
		<div className={css.hero}>
			<div className={css.hero__infoBlock}>
				<div className={css.infoBlock__top}><span /><p>OVER 1000 USERS</p></div>
				<div className={css.infoBlock__header}><h1>Enjoy Foods All
					Over The <span> World</span></h1></div>
				<div className={css.infoBlock__text}>
					<p>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early.<span> Get a $20 bonus.</span></p>
				</div>
				<div className={css.infoBlock__button}>
					<Button type={'full'}>Get started</Button>
					<Button type={'border'}>Go pro</Button>
				</div>
				<div className={css.infoBlock__reviews}></div>
			</div>
			<HeroSvg />
		</div>
	);
};

export default Hero;