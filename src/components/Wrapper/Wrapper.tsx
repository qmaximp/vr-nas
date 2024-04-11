import React from 'react';
import css from './Wrapper.module.scss'


const Wrapper = ({ children }: { children: any }) => {
	return (
		<div className={css.wrapper} >
			{children}
		</div>
	);
};

export default Wrapper;