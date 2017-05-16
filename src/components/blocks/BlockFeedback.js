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
										<a
										target="_blank"
										href={blockOptions.elements[0].like_link}
										title={blockOptions.elements[0].like_link}
										style={{
											"display": blockOptions.elements[0].like_display
										}}
										>
											<img alt="like" src={`${imgLocation}${blockOptions.elements[0].like_source}`} />
										</a>
										<a
										target="_blank"
										href={blockOptions.elements[0].neutral_link}
										title={blockOptions.elements[0].neutral_link}
										style={{
											"display": blockOptions.elements[0].neutral_display
										}}
										>
											<img alt="neutral" src={`${imgLocation}${blockOptions.elements[0].neutral_source}`} />
										</a>
										<a
										target="_blank"
										href={blockOptions.elements[0].dislike_link}
										title={blockOptions.elements[0].dislike_link}
										style={{
											"display": blockOptions.elements[0].dislike_display
										}}
										>
											<img alt="dislike" src={`${imgLocation}${blockOptions.elements[0].dislike_source}`} />
										</a>
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
