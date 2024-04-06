import React from 'react';
import css from './Header.module.scss'
import LogoSvg from '@/svgComponents/LogoSvg';
import Link from 'next/link';
import Button from '../UI/Button';


const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.header__desktop}>
				<div className={css.header__nav}>
					<Link href="/">
						<LogoSvg />
						<h3>eatly</h3>
					</Link>
					<nav>
						<ul>
							<li><Link href="/">Menu</Link></li>
							<li><Link href="/">Blog</Link></li>
							<li><Link href="/">Pricing</Link></li>
							<li><Link href="/">Contact</Link></li>
						</ul>
					</nav>
				</div>
				<div className={css.header__buttons}>
					<Button type={"empty"}>Login</Button>
					<Button type={"full"}>Sign up</Button>
				</div>
			</div>
			<div className={css.header__mobile}></div>
		</header >
	);
};

export default Header;