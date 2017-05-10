import React from 'react';

const OptionsImage2x = ({ block, language, onPropChange }) => {
	return (
		<div>
			<div>
				<label>Image 1 URL: <input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} /></label>
			</div>
			<div>
				<label>Image 2 URL: <input type="text" value={block.options.elements[1].source} onChange={(e) => onPropChange('source', e.target.value, false, 1)} /></label>
			</div>
			<div>
				<label>{language["Use padding"]}: <input type="checkbox" value={block.options.elements[0].usePadding} onChange={(e) => {onPropChange('usePadding', !block.options.elements[0].usePadding, false, 0); onPropChange('usePadding', !block.options.elements[1].usePadding, false, 1)}} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
		</div>
	);
};

export default OptionsImage2x;
