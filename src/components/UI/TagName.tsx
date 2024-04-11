import React from 'react';

const TagName = ({ type }: { type: any }) => {
	if (type) {
		return (
			<span className={
				type == "healthy"
					? `healthy` : type == "trending" ? `trending` : type == "supreme" ? `supreme` : ''
			}>
				{type == "healthy"
					? `healthy` : type == "trending" ? `trending` : type == "supreme" ? `supreme` : ''}
			</span >
		);
	} else {
		return (
			''
		)
	}
};

export default TagName;