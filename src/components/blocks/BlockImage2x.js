import React from 'react';

const BlockImage2x = ({ blockOptions }) => {
	const alt = "cool image!";
	return (
		<table
			width="100%"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td>
						<img alt={alt} height="" style={{width: blockOptions.elements[0].usePadding? '98%':' 100%', padding: blockOptions.elements[0].usePadding? '2% 2% 2% 0': '0'}} src={blockOptions.elements[0].source} />
					</td>
					<td>
						<img alt={alt} height="" style={{width: blockOptions.elements[0].usePadding? '98%':' 100%', padding: blockOptions.elements[1].usePadding? '2% 0 2% 2%': '0'}} src={blockOptions.elements[1].source} />
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockImage2x;
