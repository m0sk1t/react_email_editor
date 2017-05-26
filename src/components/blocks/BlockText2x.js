/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { stylizeBlock } from '../../actions';

const mapStateToProps = (state) => {
	return {
		config: state.tinymce_config
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPropChange: (prop, val, container, elementIndex) => {
			dispatch(stylizeBlock(prop, val, container, elementIndex));
		}
	};
};

const BlockText2x = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ id, config, blockOptions, onPropChange }) => {
	const initEditable = (node) => {
		window.tinymce.init({
			...config,
			selector: `#id_${id} td.editable_${node}`,
			init_instance_callback: (editor) => {
				editor.on('change', function (e) {
					onPropChange('text', e.target.targetElm.innerHTML, false, node==="first"?0:1);
				});
			}
		})
	};
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
					className="editable_first"
					onClick={() => initEditable('first')}
					width={blockOptions.elements[0].width.match(/\d+/)[0]}
					style={{...blockOptions.elements[0], padding: '0 10px'}}
					dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[0].text:'empty node'}}
					></td>
					<td
					className="editable_second"
					onClick={() => initEditable('second')}
					width={blockOptions.elements[1].width.match(/\d+/)[0]}
					style={{...blockOptions.elements[1], padding: '0 10px'}}
					dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[1].text:'empty node'}}
					></td>
				</tr>
			</tbody>
		</table>
	);
});

export default BlockText2x;
