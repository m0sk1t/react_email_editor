import React from 'react';

const BlockSocialText = ({ blockOptions }) => {
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
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
							style={blockOptions.elements[0]}
						>
							<tbody>
								<tr>
									<td
										style={{
											textAlign: blockOptions.elements[0].float
										}}
									>
										<a href=""><img alt="vk" src={blockOptions.elements[0].vk_source} /></a>
										<a href=""><img alt="ok" src={blockOptions.elements[0].ok_source} /></a>
										<a href=""><img alt="fb" src={blockOptions.elements[0].youtube_source} /></a>
										<a href=""><img alt="yt" src={blockOptions.elements[0].facebook_source} /></a>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
							style={blockOptions.elements[1]}
						>
							<tbody>
								<tr>
									<td
									style={{
										"padding": "0 2%"
									}}
									dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[1].text:'empty node'}}
									></td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockSocialText;
