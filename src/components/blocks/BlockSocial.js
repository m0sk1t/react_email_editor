import React from 'react';

const BlockSocial = ({ blockOptions }) => {
	const imgLocation = '/';
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
					width="550"
					style={blockOptions.elements[0]}
					>
						<a
						target="_blank"
						href={blockOptions.elements[0].ok_link}
						title={blockOptions.elements[0].ok_link}
						style={{
							"display": blockOptions.elements[0].ok_display
						}}
						>
							<img alt="OK link" src={`${imgLocation}${blockOptions.elements[0].ok_source}`} />
						</a>
						<a
						target="_blank"
						href={blockOptions.elements[0].vk_link}
						title={blockOptions.elements[0].vk_link}
						style={{
							"display": blockOptions.elements[0].vk_display
						}}
						>
							<img alt="VK link" src={`${imgLocation}${blockOptions.elements[0].vk_source}`} />
						</a>
						<a
						target="_blank"
						href={blockOptions.elements[0].youtube_link}
						title={blockOptions.elements[0].youtube_link}
						style={{
							"display": blockOptions.elements[0].youtube_display
						}}
						>
							<img alt="Facebook link" src={`${imgLocation}${blockOptions.elements[0].youtube_source}`} />
						</a>
						<a
						target="_blank"
						href={blockOptions.elements[0].facebook_link}
						title={blockOptions.elements[0].facebook_link}
						style={{
							"display": blockOptions.elements[0].facebook_display
						}}
						>
							<img alt="Youtube link" src={`${imgLocation}${blockOptions.elements[0].facebook_source}`} />
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockSocial;
