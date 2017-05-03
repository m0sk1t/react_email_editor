import React from 'react';
import Block from './Block';
import { connect } from 'react-redux';
import { rmBlock } from '../actions';
import { addBlock } from '../actions';
import { swapBlocks } from '../actions';
import { selectBlock } from '../actions';

const mapStateToProps = (state) => {
	return {
		template: state.template,
		components: state.components,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRm: (id) => {
			dispatch(rmBlock(id));
		},
		onAdd: (block, index) => {
			dispatch(addBlock(block, index));
		},
		onDrop: (id, index) => {
			dispatch(swapBlocks(id, index));
		},
		onBlockClick: (id) => {
			dispatch(selectBlock(id));
		}
	};
};

const BlockList = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ template, components, onAdd, onDrop, onBlockClick }) => {
	let blockDragged = null;
	return (
		<div
			style={{
				'height': '100%',
				'display': 'flex',
				'overflowY': 'auto',
				'justifyContent': 'center',
			}}
		>
			<table cellPadding="0" cellSpacing="0" role="presentation" style={{width:'640px'}}>
				<tbody>
					{template.map((block, index) =>
						<tr
							key={block.id}
							draggable="true"
							onClick={() => onBlockClick(block.id)}
							onDragOver={ev => ev.preventDefault()}
							onDragStart={() => blockDragged = block}
							onDrop={() => {
									if (blockDragged) {
										onDrop(blockDragged.id, index);
									} else {
										onAdd(components.filter(el => el.selected)[0].block, index);
									}
								}
							}
						>
							<td
								style={block.options.container}
							>
							<Block
								block={block}
								clickHandle={onBlockClick}
							 />
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
		);
});

export default BlockList;
