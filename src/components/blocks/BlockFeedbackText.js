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

const BlockFeedbackText = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ id, blockOptions, onPropChange }) => {
	const initEditable = () => {
		window.tinymce.init({
			selector: `#id_${id} td.editable`,
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
					onPropChange('text', e.target.targetElm.innerHTML, false, 1);
				});
			}
		})
	};
	const imgLocation = document.location.href.indexOf('nm_email_editor') > 0? `${document.location.origin}/wp-content/plugins/newsmine/include/email_editor/`: '/';
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
					style={blockOptions.elements[0]}
					width={blockOptions.elements[0].width.match(/\d+/)[0]}
					>
						<a
						target="_blank"
						href={blockOptions.elements[0].like_link}
						title={blockOptions.elements[0].like_link}
						style={{
							"display": blockOptions.elements[0].like_display
						}}
						>
							<img alt="like" src={`${imgLocation}${blockOptions.elements[0].like_source}`} />
						</a>
						<a
						target="_blank"
						href={blockOptions.elements[0].neutral_link}
						title={blockOptions.elements[0].neutral_link}
						style={{
							"display": blockOptions.elements[0].neutral_display
						}}
						>
							<img alt="neutral" src={`${imgLocation}${blockOptions.elements[0].neutral_source}`} />
						</a>
						<a
						target="_blank"
						href={blockOptions.elements[0].dislike_link}
						title={blockOptions.elements[0].dislike_link}
						style={{
							"display": blockOptions.elements[0].dislike_display
						}}
						>
							<img alt="dislike" src={`${imgLocation}${blockOptions.elements[0].dislike_source}`} />
						</a>
					</td>
					<td
					className="editable"
					onClick={() => initEditable()}
					style={blockOptions.elements[1]}
					width={blockOptions.elements[1].width.match(/\d+/)[0]}
					dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[1].text:'empty node'}}
					></td>
				</tr>
			</tbody>
		</table>
	);
});

export default BlockFeedbackText;
