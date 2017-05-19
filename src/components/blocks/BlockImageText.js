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

const BlockImageText = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ id, blockOptions, onPropChange }) => {
	const alt = "cool image!";
	const initEditable = () => {
		window.tinymce.init({
			selector: `#id_${id} td.editable`,
			inline: true,
			menubar: false,
			paste_as_text: true,
			preview_styles: false,
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
	return (
		<table
			width="550"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td>
						<table
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
							style={blockOptions.elements[0]}
						>
							<tbody>
								<tr>
									<td>
										<a
											href={blockOptions.elements[0].link}
											target="_blank"
										>
											<img
											width={blockOptions.elements[0].width}
											style={{
												width: blockOptions.elements[0].width,
												borderRadius: blockOptions.elements[0].borderRadius
											}} alt={alt} src={blockOptions.elements[0].source} />
										</a>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							cellPadding="0"
							cellSpacing="0"
							role="presentation"
							style={blockOptions.elements[1]}
						>
							<tbody>
								<tr>
									<td
									style={{
										"padding": "0 2%"
									}}
									className="editable"
									onClick={() => initEditable()}
									dangerouslySetInnerHTML={{__html: blockOptions?blockOptions.elements[1].text:'empty node'}}
									>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	);
});

export default BlockImageText;
