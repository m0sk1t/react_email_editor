import React from 'react';

const BlockText2x = ({ blockOptions }) => {
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
									dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[0].text:'empty node'}}
									></td>
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

export default BlockText2x;
