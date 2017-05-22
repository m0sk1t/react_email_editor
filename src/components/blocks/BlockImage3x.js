import React from 'react';

const BlockImage3x = ({ blockOptions }) => {
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
					width={blockOptions.container.usePadding? '180':'183'}
					>
						<a
							href={blockOptions.elements[0].link}
							target="_blank"
						>
							<img
							alt={alt}
							src={blockOptions.elements[0].source}
							width={blockOptions.container.usePadding? '180':'183'}
							style={{
								borderRadius: blockOptions.elements[0].borderRadius,
								width: blockOptions.container.usePadding? '180px':'183px',
								padding: blockOptions.container.usePadding? '10px 5px 10px 0': '0'
							}}
							/>
						</a>
					</td>
					<td
					width={blockOptions.container.usePadding? '180':'183'}
					>
						<a
							href={blockOptions.elements[1].link}
							target="_blank"
						>
							<img
							alt={alt}
							src={blockOptions.elements[1].source}
							width={blockOptions.container.usePadding? '180':'183'}
							style={{
								borderRadius: blockOptions.elements[0].borderRadius,
								width: blockOptions.container.usePadding? '180px':'183px',
								padding: blockOptions.container.usePadding? '10px 5px 10px 5px': '0'
							}}
							/>
						</a>
					</td>
					<td
					width={blockOptions.container.usePadding? '180':'183'}
					>
						<a
							href={blockOptions.elements[2].link}
							target="_blank"
						>
							<img
							alt={alt}
							src={blockOptions.elements[2].source}
							width={blockOptions.container.usePadding? '180':'183'}
							style={{
								borderRadius: blockOptions.elements[0].borderRadius,
								width: blockOptions.container.usePadding? '180px':'183px',
								padding: blockOptions.container.usePadding? '10px 0 10px 5px': '0'
							}}
							/>
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockImage3x;
