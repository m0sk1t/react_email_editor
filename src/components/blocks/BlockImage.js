import React from 'react';

const BlockImage = ({ blockOptions }) => {
	const alt = "cool image!";
	return (
		<table
			width={blockOptions.elements[0].width}
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody
			width={blockOptions.elements[0].width}
			>
				<tr
				width={blockOptions.elements[0].width}
				>
					<td
					width={blockOptions.elements[0].width}
					>
						<a
						href={blockOptions.elements[0].link}
						target="_blank">
							<img alt={alt} width={blockOptions.elements[0].width} src={blockOptions.elements[0].source} />
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockImage;
