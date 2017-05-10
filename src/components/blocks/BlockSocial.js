import React from 'react';

const BlockSocial = ({ blockOptions }) => {
	return (
		<table
			width="100%"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td
						style={blockOptions.container}
					>
						<table
							width="100%"
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
						>
							<tbody>
								<tr>
									<td
									style={blockOptions.elements[0]}
									>
										<a href=""><img alt="vk" src={blockOptions.elements[0].vk_source} /></a>
										<a href=""><img alt="ok" src={blockOptions.elements[0].ok_source} /></a>
										<a href=""><img alt="fb" src={blockOptions.elements[0].youtube_source} /></a>
										<a href=""><img alt="yt" src={blockOptions.elements[0].facebook_source} /></a>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockSocial;
