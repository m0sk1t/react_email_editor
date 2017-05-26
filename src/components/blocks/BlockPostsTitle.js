/* eslint-disable */
import React from 'react';

const BlockPostsTitle = ({ blockOptions }) => {
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
					<td colSpan="2">[posts]</td>
				</tr>
				<tr>
					<td
					colSpan="2"
					style={blockOptions.elements[2]}
					><b>[title]</b></td>
				</tr>
				<tr>
					<td
					width={blockOptions.elements[0].width.match(/\d+/)[0]}
					>
						<a target="_blank" href="[thumbnail_url]">
							<img
							src="[thumbnail_url]"
							width={blockOptions.elements[0].width.match(/\d+/)[0]}
							style={{
								width: blockOptions.elements[0].width,
								borderRadius: blockOptions.elements[0].borderRadius
							}} alt={alt} />
						</a>
					</td>
					<td
					style={blockOptions.elements[1]}
					width={blockOptions.elements[1].width.match(/\d+/)[0]}
					>
						[content]
					</td>
				</tr>
				<tr
				style={{
					display: blockOptions.elements[3].display
				}}
				>
					<td
					colSpan="2"
					style={blockOptions.elements[3]}
					>
						<hr />
					</td>
				</tr>
				<tr>
					<td colSpan="2">[/posts]</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockPostsTitle;
