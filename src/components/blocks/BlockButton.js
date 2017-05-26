import React from 'react';

const BlockButton = ({ blockOptions, onPropChange }) => {
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
					<a
					target="_blank"
					href={blockOptions.elements[0].link}
					title={blockOptions.elements[0].link}
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
