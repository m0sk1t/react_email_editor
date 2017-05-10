import React from 'react';
import TinyMCE from 'react-tinymce';

const OptionsText = ({ block, language, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Color"]}: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>
					{language["Text"]}:
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
