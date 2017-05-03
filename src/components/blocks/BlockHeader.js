import React from 'react';

const BlockHeader = ({ blockOptions }) => {
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
						<div
						style={blockOptions.elements[0]}
						>{blockOptions.elements[0].text}</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockHeader;
