import React from 'react';

const BlockImage2x = ({ blockOptions }) => {
	const alt = "cool image!";
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
					width={blockOptions.container.usePadding? '265':'275'}
					>
						<a
						href={blockOptions.elements[0].link}
						target="_blank">
							<img
							alt={alt}
							width={blockOptions.container.usePadding? '265':'275'}
							style={{
								borderRadius: blockOptions.elements[0].borderRadius,
								width: blockOptions.container.usePadding? '265px':'275px',
								padding: blockOptions.container.usePadding? '10px 5px 10px 0': '0'
							}}
								src={blockOptions.elements[0].source} />
						</a>
					</td>
					<td
					width={blockOptions.container.usePadding? '265':'275'}
					>
						<a
							href={blockOptions.elements[1].link}
							target="_blank"
						>
							<img
							alt={alt}
							width={blockOptions.container.usePadding? '265':'275'}
							style={{
								borderRadius: blockOptions.elements[0].borderRadius,
								width: blockOptions.container.usePadding? '265px':'275px',
								padding: blockOptions.container.usePadding? '10px 0 10px 5px': '0'
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
