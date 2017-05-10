import React from 'react';

const BlockFeedbackText = ({ blockOptions }) => {
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
										<a target="_blank" style={{
											"display": blockOptions.elements[0].like_display
										}} href={blockOptions.elements[0].like_link}><img alt="like" src={blockOptions.elements[0].like_source} /></a>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].neutral_display
										}} href={blockOptions.elements[0].neutral_link}><img alt="neutral" src={blockOptions.elements[0].neutral_source} /></a>
										<a target="_blank" style={{
											"display": blockOptions.elements[0].dislike_display
										}} href={blockOptions.elements[0].dislike_link}><img alt="dislike" src={blockOptions.elements[0].dislike_source} /></a>
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

export default BlockFeedbackText;
