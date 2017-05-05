import React from 'react';
import TinyMCE from 'react-tinymce';

const OptionsImageText = ({ block, onPropChange }) => {
	return (
		<div>
			<div>
				<label>URL: <input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} /></label>
			</div>
			<div>
				<label>Image size:
				<select onChange={(e) => {
					switch (e.target.value) {
						case 'Small':
							onPropChange('width', '25%', false, 0);
							onPropChange('width', '75%', false, 1);
							break;
						case 'Middle':
							onPropChange('width', '35%', false, 0);
							onPropChange('width', '65%', false, 1);
							break;
						case 'Big':
							onPropChange('width', '50%', false, 0);
							onPropChange('width', '50%', false, 1);
							break;
						default:
							break;
					}
				}}>
					<option value="Small">Small</option>
					<option value="Middle">Middle</option>
					<option value="Big">Big</option>
				</select>
				</label>
			</div>
			<div>
				<label>Image position:
				<select onChange={(e) => onPropChange('float', e.target.value, false, 0)}>
					<option value="left">left</option>
					<option value="right">right</option>
				</select>
				</label>
			</div>
			<div>
				<label>Color: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>Background: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>
					Text:
					<TinyMCE
						content={block.options.elements[1].text}
						config={{
						  plugins: 'link image code textcolor colorpicker',
						  toolbar: 'undo redo | forecolor backcolor |bold italic | alignleft aligncenter alignright | code'
						}}
						onChange={(e) => onPropChange('text', e.target.getContent(), false, 1)}
					 />
				 </label>
			</div>
		</div>
	);
};

export default OptionsImageText;
