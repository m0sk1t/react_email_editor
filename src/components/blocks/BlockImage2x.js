import React from 'react';

const BlockImage2x = ({ blockOptions }) => {
	const alt = "cool image!";
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
						<a
						href={blockOptions.elements[0].link}
						target="_blank">
							<img
							alt={alt}
							height=""
							style={{
								borderRadius: blockOptions.elements[0].borderRadius,
								width: blockOptions.container.usePadding? '98%':' 100%',
								padding: blockOptions.container.usePadding? '2% 2% 2% 0': '0'
							}}
								src={blockOptions.elements[0].source} />
						</a>
					</td>
					<td>
						<a
							href={blockOptions.elements[1].link}
							target="_blank"
						>
							<img
							alt={alt}
							height=""
							style={{
								borderRadius: blockOptions.elements[0].borderRadius,
								width: blockOptions.container.usePadding? '98%':' 100%',
								padding: blockOptions.container.usePadding? '2% 0 2% 2%': '0'
							}}
								src={blockOptions.elements[1].source} />
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockImage2x;
