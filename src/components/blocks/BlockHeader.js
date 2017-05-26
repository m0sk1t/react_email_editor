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

const BlockHeader = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ id, config, blockOptions, onPropChange }) => {
	const initEditable = () => {
		window.tinymce.init({
			...config,
			selector: `#id_${id} td.editable`,
			init_instance_callback: (editor) => {
				editor.on('change', function (e) {
					onPropChange('text', e.target.targetElm.innerHTML, false, 1);
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
					width="550"
					className="editable"
					onClick={() => initEditable()}
					style={blockOptions.elements[0]}
					height={blockOptions.container.height}
					dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[0].text:'empty node'}}
					>
					</td>
				</tr>
			</tbody>
		</table>
	);
});

export default BlockHeader;
