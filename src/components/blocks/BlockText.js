import React from 'react';

const BlockText = ({ blockOptions }) => {
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
						style={blockOptions.elements[0]}
						dangerouslySetInnerHTML={{__html: blockOptions.elements[0].text}}
					></td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockText;
