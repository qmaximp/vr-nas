import React from 'react';

interface Props {
	children?: any
	type?: any
	className?: any
}
const Button = ({ children, type, className }: Props) => {
	if (type) {
		return (
			<button className={
				type == "empty"
					? `emptyButton ${className}` : type == "border" ? `borderButton ${className}` : type == "full" ? `fullButton ${className}` : ''
			}>
				{children}
			</button >
		);
	} else {
		return (
			<button className={className}> {children} </ button>
		)
	}
};

export default Button;