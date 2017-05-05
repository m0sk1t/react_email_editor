import React from 'react';

const OptionsImage = ({ block, onPropChange }) => {
	return (
		<div>
			<div>
				<label>URL: <input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} /></label>
			</div>
			<div>
				<label>Use padding: <input type="checkbox" value={block.options.container.padding === '0'? false: true} onChange={(e) => onPropChange('usePadding', (block.options.container.padding === '0'? '2%': '0'), true)} /></label>
			</div>
			<div>
				<label>Color: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>Background: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
		</div>
	);
};

export default OptionsImage;
