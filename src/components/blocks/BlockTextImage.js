import React from 'react';

const BlockTextImage = ({ blockOptions }) => {
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
						<div
						dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[0].text:'empty node'}}
						></div>
					</td>
					<td>
						<img alt={alt} style={{width:'100%'}} src={blockOptions.elements[1].source} />
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockTextImage;
