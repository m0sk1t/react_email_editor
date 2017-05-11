import React from 'react';

const BlockButton = ({ id, blockOptions, onPropChange }) => {
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
					>
					<a
					href={blockOptions.elements[0].link}
					target="_blank"
					style={{
						'textDecoration': 'none',
						'color': blockOptions.container.color,
						'padding': blockOptions.elements[0].buttonPaddings,
						'borderRadius': blockOptions.elements[0].buttonBorderRadius,
						'backgroundColor': blockOptions.elements[0].buttonBackgroundColor
					}}
					>
					{blockOptions.elements[0].text}
					</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockButton;
