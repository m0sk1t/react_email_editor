import React from 'react';

const OptionsImage2x = ({ block, language, onFileChange, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>
					{language["URL"]} 1:
					<input
						type="file"
						onChange={(e) => {
							var formData = new FormData();
							var file = e.target.files[0];
							formData.append('file', file);
							onFileChange(block, 0, formData);
						}} />
					<input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>
					{language["URL"]} 2:
					<input
						type="file"
						onChange={(e) => {
							var formData = new FormData();
							var file = e.target.files[0];
							formData.append('file', file);
							onFileChange(block, 1, formData);
						}} />
					<input type="text" value={block.options.elements[1].source} onChange={(e) => onPropChange('source', e.target.value, false, 1)} />
				</label>
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
