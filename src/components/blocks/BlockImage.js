import React from 'react';

const BlockImage = ({ blockOptions }) => {
	const alt = "cool image!";
	return (
		<table
			width={blockOptions.elements[0].width.match(/\d+/)[0]}
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td
					width={blockOptions.elements[0].width.match(/\d+/)[0]}
					>
						<a
						href={blockOptions.elements[0].link}
						target="_blank">
							<img alt={alt} width={blockOptions.elements[0].width.match(/\d+/)[0]} src={blockOptions.elements[0].source} />
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockImage;
