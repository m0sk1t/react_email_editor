import React from 'react';
import TinyMCE from 'react-tinymce';

const OptionsText = ({ block, onPropChange }) => {
	return (
		<div>
			<div>
				<label>Height: <input type="text" value={block.options.container.height} onChange={(e) => onPropChange('height', e.target.value, true)} /></label>
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
						content={block.options.elements[0].text}
						config={{
						  plugins: 'link image code textcolor colorpicker',
						  toolbar: 'undo redo | forecolor backcolor |bold italic | alignleft aligncenter alignright | code'
						}}
						onChange={(e) => onPropChange('text', e.target.getContent(), false, 0)}
					 />
				 </label>
			</div>
		</div>
	);
};

export default OptionsText;
