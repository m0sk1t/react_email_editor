import React from 'react';

const BlockHr = ({ blockOptions, onPropChange }) => {
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
					height={blockOptions.container.height}
					>
					<hr />
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockHr;
