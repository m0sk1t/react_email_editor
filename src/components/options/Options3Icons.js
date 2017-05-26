import React from 'react';

const Options3Icons = ({ block, language, onFileChange, onPropChange }) => {
	let textIndex = 3;
	let imageIndex = 0;
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<hr />
			<div>
				<label>{language["Color"]}: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<hr />
			<div>
				<label>
					{language["URL"]}
					<select value={imageIndex} onChange={e => imageIndex = +e.target.value}>
						<option value="0">{language["URL"]} 1</option>
						<option value="1">{language["URL"]} 2</option>
						<option value="2">{language["URL"]} 3</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					{language["URL"]} {imageIndex + 1}:
					<label>
						<input
							type="file"
							onChange={(e) => {
								onFileChange(block, +imageIndex, e.target.files[0]);
							}} />
						<div>&#8853;</div>
					</label>
					<input type="text" value={block.options.elements[+imageIndex].source} onChange={(e) => onPropChange('source', e.target.value, false, +imageIndex)} />
				</label>
			</div>
			<hr />
			<div>
				<label>
					{language["Text"]}
					<select value={textIndex} onChange={e => textIndex = +e.target.value}>
						<option value="3">{language["Text"]} 1</option>
						<option value="4">{language["Text"]} 2</option>
						<option value="5">{language["Text"]} 3</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					{language["Text"]} {textIndex - 2}
					<input type="text" value={block.options.elements[+textIndex].text} onChange={e => onPropChange('text', e.target.value, false, +textIndex)} />
				</label>
			</div>
		</div>
	);
};

export default Options3Icons;
