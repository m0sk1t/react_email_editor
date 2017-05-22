import React from 'react';

const BlockVideo = ({ blockOptions }) => {
	const alt = "cool video!";
	return (
		<table
			width="550"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td
					width={blockOptions.elements[0].width}
					>
						<a
						href={blockOptions.elements[0].link}
						target="_blank">
							<img alt={alt} width={blockOptions.elements[0].width} src={`https://img.youtube.com/vi/${blockOptions.elements[0].source}/0.jpg`} />
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockVideo;
