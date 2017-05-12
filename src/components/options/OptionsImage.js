import React from 'react';

const OptionsImage = ({ block, language, onFileChange, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>
					{language["URL"]}:
					<input
						type="file"
						onChange={(e) => {
							onFileChange(block, 0, e.target.files[0]);
						}} />
					<input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>{language["Add paddings"]}: <input type="checkbox" checked={block.options.container.padding === '0'? '': 'checked'} onChange={(e) => onPropChange('padding', (block.options.container.padding === '0'? '2%': '0'), true)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
		</div>
	);
};

export default OptionsImage;
