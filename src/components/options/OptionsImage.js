import React from 'react';

const OptionsImage = ({ block, onPropChange }) => {
	return (
		<div>
			<div>
				<label>URL: <input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} /></label>
			</div>
		</div>
	);
};

export default OptionsImage;
