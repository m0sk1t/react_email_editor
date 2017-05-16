import React from 'react';

const BlockFeedback = ({ blockOptions }) => {
	const imgLocation = document.location.href.indexOf('nm_email_editor') > 0? `${document.location.origin}/wp-content/plugins/newsmine/include/email_editor/`: '/';
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
										<a target="_blank" style={{
											"display": blockOptions.elements[0].like_display
										}} href={blockOptions.elements[0].like_link}><img alt="like" src={`${imgLocation}${blockOptions.elements[0].like_source}`} /></a>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].neutral_display
										}} href={blockOptions.elements[0].neutral_link}><img alt="neutral" src={`${imgLocation}${blockOptions.elements[0].neutral_source}`} /></a>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].dislike_display
										}} href={blockOptions.elements[0].dislike_link}><img alt="dislike" src={`${imgLocation}${blockOptions.elements[0].dislike_source}`} /></a>
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

export default BlockFeedback;
