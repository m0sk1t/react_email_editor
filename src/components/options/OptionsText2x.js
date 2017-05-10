import React from 'react';
import TinyMCE from 'react-tinymce';

const OptionsText2x = ({ block, language, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Color"]}: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Text"]} 1:
				<select onChange={(e) => {
					switch (e.target.value) {
						case 'small':
							onPropChange('width', '25%', false, 0);
							onPropChange('width', '75%', false, 1);
							break;
						case 'middle':
							onPropChange('width', '35%', false, 0);
							onPropChange('width', '65%', false, 1);
							break;
						case 'big':
							onPropChange('width', '50%', false, 0);
							onPropChange('width', '50%', false, 1);
							break;
						default:
							break;
					}
				}}>
					<option value="small">{language["small"]}</option>
					<option value="middle">{language["middle"]}</option>
					<option value="big">{language["big"]}</option>
				</select>
				</label>
			</div>
			<div>
				<label>{language["Text"]} 1 position:
				<select onChange={(e) => onPropChange('float', e.target.value, false, 0)}>
					<option value="left">{language["left"]}</option>
					<option value="right">{language["right"]}</option>
				</select>
				</label>
			</div>
			<div>
				<label>
					{language["Text"]} 1:
					<TinyMCE
						content={block.options.elements[0].text}
						config={{
						  plugins: 'link image code textcolor colorpicker',
						  toolbar: 'undo redo | forecolor backcolor |bold italic | alignleft aligncenter alignright | code'
						}}
						onChange={(e) => onPropChange('text', e.target.getContent(), false, 0)}
					 />
				 </label>
			</div>
			<div>
				<label>
					{language["Text"]} 2:
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

export default OptionsText2x;
