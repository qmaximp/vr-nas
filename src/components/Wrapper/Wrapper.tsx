import React from 'react';
import css from './Wrapper.module.scss'

interface Props {
	children?: any
}
const Wrapper = ({ children }: Props) => {
	return (
		<div className={css.wrapper} >
			{children}
		</div>
	);
};

export default Wrapper;