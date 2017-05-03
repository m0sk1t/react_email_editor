import React from 'react';

const BlockImageText = ({ blockOptions }) => {
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
						<img alt={alt} style={{width:'100%'}} src={blockOptions.elements[0].source} />
					</td>
					<td>
						<div
						dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[1].text:'empty node'}}
						></div>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockImageText;
