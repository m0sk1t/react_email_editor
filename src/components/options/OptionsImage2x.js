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
					<label>
						<input
							type="file"
							onChange={(e) => {
								onFileChange(block, 0, e.target.files[0]);
							}} />
						<div>&#8853;</div>
					</label>
					<input type="text" value={block.options.elements[0].source} onChange={(e) => onPropChange('source', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>{language["Link"]} 1: <input type="text" value={block.options.elements[0].link} onChange={(e) => onPropChange('link', e.target.value, false, 0)} /></label>
			</div>
			<hr />
			<div>
				<label>
					{language["URL"]} 2:
					<label>
						<input
							type="file"
							onChange={(e) => {
								onFileChange(block, 1, e.target.files[0]);
							}} />
						<div>&#8853;</div>
					</label>
					<input type="text" value={block.options.elements[1].source} onChange={(e) => onPropChange('source', e.target.value, false, 1)} />
				</label>
			</div>
			<div>
				<label>{language["Link"]} 2: <input type="text" value={block.options.elements[1].link} onChange={(e) => onPropChange('link', e.target.value, false, 1)} /></label>
			</div>
			<div>
				<label>{language["Add paddings"]}: <input type="checkbox" checked={block.options.container.usePadding? 'checked': ''} onChange={(e) => onPropChange('usePadding', !block.options.container.usePadding, true)} /></label>
			</div>
			<div>
				<label>{language["Border radius"]}: <input type="text" value={block.options.elements[0].borderRadius} onChange={(e) => onPropChange('borderRadius', e.target.value, false, 0)} /></label>
			</div>
			<hr />
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
		</div>
	);
};

export default OptionsImage2x;
