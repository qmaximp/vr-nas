import PhoneAppSvg from '@/svgComponents/PhoneAppSvg';
import React from 'react';
import Button from '../UI/Button';
import css from './DownloadApp.module.scss'

const DownloadApp = () => {
	return (
		<div className={css.downloadApp}>
			<PhoneAppSvg />
			<div className={css.downloadApp__text}>
				<h2>Premium <span>Quality</span> For Your Health</h2>
				<ul>
					<li>• Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
					<li>• These foods promote overall wellness by support healthy digestion and boosting immunity</li>
				</ul>
				<Button type={"full"}>Download</Button>
			</div>
		</div>
	);
};

export default DownloadApp;