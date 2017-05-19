import React from 'react';

const OptionsImageText = ({ block, language, onFileChange, onPropChange }) => {
	const fontSize = block.options.container.fontSize.match(/\d+/)?block.options.container.fontSize.match(/\d+/)[0]: '16';
	const imageSize = block.options.elements[0].width === '136px'? 'small': (block.options.elements[0].width === '192px'? 'middle': 'big');
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>
					{language["URL"]}:
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
				<label>{language["Link"]}: <input type="text" value={block.options.elements[0].link} onChange={(e) => onPropChange('link', e.target.value, false, 0)} /></label>
			</div>
			<div>
				<label>{language["Font size"]}: <input type="number" value={fontSize} onChange={(e) => onPropChange('fontSize', `${e.target.value}px`, true)} /></label>
			</div>
			<div>
				<label>{language["Image size"]}:
				<select value={imageSize} onChange={(e) => {
					switch (e.target.value) {
						case 'small':
							onPropChange('width', '136px', false, 0);
							onPropChange('width', '410px', false, 1);
							break;
						case 'middle':
							onPropChange('width', '192px', false, 0);
							onPropChange('width', '350px', false, 1);
							break;
						case 'big':
							onPropChange('width', '275px', false, 0);
							onPropChange('width', '270px', false, 1);
							break;
						default:
							break;
					}
				}}>
					<option value="small">{language["small"]}</option>
					<option value="middle">{language["middle"]}</option>
					<option value="big">{language["big"]}</option>
				</select>
				</label>
			</div>
			<div>
				<label>{language["Image position"]}:
				<select onChange={(e) => onPropChange('float', e.target.value, false, 0)}>
					<option value="left">left</option>
					<option value="right">right</option>
				</select>
				</label>
			</div>
			<div>
				<label>{language["Color"]}: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Border radius"]}: <input type="text" value={block.options.elements[0].borderRadius} onChange={(e) => onPropChange('borderRadius', e.target.value, false, 0)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>
					{language["Font family"]}:
					<select style={{width: '50%'}} onChange={(e) => onPropChange('fontFamily', e.target.value, true)}>
						<option value='Georgia, serif'>Georgia, serif</option>
						<option value='Tahoma, Geneva, sans-serif'>Tahoma, Geneva, sans-serif</option>
						<option value='Verdana, Geneva, sans-serif'>Verdana, Geneva, sans-serif</option>
						<option value='Arial, Helvetica, sans-serif'>Arial, Helvetica, sans-serif</option>
						<option value='Impact, Charcoal, sans-serif'>Impact, Charcoal, sans-serif</option>
						<option value='"Times New Roman", Times, serif'>"Times New Roman", Times, serif</option>
						<option value='"Courier New", Courier, monospace'>"Courier New", Courier, monospace</option>
						<option value='"Arial Black", Gadget, sans-serif'>"Arial Black", Gadget, sans-serif</option>
						<option value='"Lucida Console", Monaco, monospace'>"Lucida Console", Monaco, monospace</option>
						<option value='"Comic Sans MS", cursive, sans-serif'>"Comic Sans MS", cursive, sans-serif</option>
						<option value='"Trebuchet MS", Helvetica, sans-serif'>"Trebuchet MS", Helvetica, sans-serif</option>
						<option value='"Lucida Sans Unicode", "Lucida Grande", sans-serif'>"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
						<option value='"Palatino Linotype", "Book Antiqua", Palatino, serif'>"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
					</select>
				</label>
			</div>
		</div>
	);
};

export default OptionsImageText;
