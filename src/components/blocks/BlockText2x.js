/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { stylizeBlock } from '../../actions';

const mapStateToProps = (state) => {
	return {
		template: state.template
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
)(({ id, blockOptions, onPropChange }) => {
	const initEditable = (node) => {
		window.tinymce.init({
			selector: `#id_${id} td.editable_${node}`,
			inline: true,
			menubar: false,
			paste_as_text: true,
			preview_styles: false,
			paste_data_images:false,
			plugins: ["link hr paste lists textcolor code"],
			toolbar: "bold italic forecolor backcolor hr styleselect removeformat | link unlink | pastetext code",
			paste_postprocess : function(pl, o) {
				o.node.innerHTML = o.node.innerHTML.replace(/&nbsp;/ig, " ");
				o.node.innerHTML = o.node.innerHTML.replace(/&quot;/ig, "\"");
			},
			init_instance_callback: (editor) => {
				editor.on('change', function (e) {
					onPropChange('text', e.target.targetElm.innerHTML, false, 0);
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
					width={blockOptions.elements[0].width}
					style={{...blockOptions.elements[0], padding: '0 10px'}}
					dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[0].text:'empty node'}}
					></td>
					<td
					className="editable_second"
					onClick={() => initEditable('second')}
					width={blockOptions.elements[1].width}
					style={{...blockOptions.elements[1], padding: '0 10px'}}
					dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[1].text:'empty node'}}
					></td>
				</tr>
			</tbody>
		</table>
	);
});

export default BlockText2x;
