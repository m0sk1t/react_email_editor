import React from 'react';

const Block3Icons = ({ blockOptions, onPropChange }) => {
	const alt="cool image";
	return (
		<table
			width="450"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td width="150">
						<a width="150">
							<img alt={alt} width="150" src={blockOptions.elements[0].source} />
						</a>
					</td>
					<td width="150">
						<a width="150">
							<img alt={alt} width="150" src={blockOptions.elements[1].source} />
						</a>
					</td>
					<td width="150">
						<a width="150">
							<img alt={alt} width="150" src={blockOptions.elements[2].source} />
						</a>
					</td>
				</tr>
				<tr>
					<td style={blockOptions.elements[3]}>{blockOptions.elements[3].text}</td>
					<td style={blockOptions.elements[4]}>{blockOptions.elements[4].text}</td>
					<td style={blockOptions.elements[5]}>{blockOptions.elements[5].text}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Block3Icons;
