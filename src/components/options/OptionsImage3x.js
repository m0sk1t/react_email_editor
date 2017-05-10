import React from 'react';

const OptionsImage3x = ({ block, language, onPropChange }) => {
	return (
		<div>
			<div>
				<label>URL 1: <input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} /></label>
			</div>
			<div>
				<label>URL 2: <input type="text" value={block.options.elements[1].source} onChange={(e) => onPropChange('source', e.target.value, false, 1)} /></label>
			</div>
			<div>
				<label>URL 3: <input type="text" value={block.options.elements[2].source} onChange={(e) => onPropChange('source', e.target.value, false, 2)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
		</div>
	);
};

export default OptionsImage3x;
