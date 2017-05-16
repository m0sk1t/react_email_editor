import React from 'react';

const OptionsText2x = ({ block, language, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>{language["Color"]}: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Text"]} 1:
				<select onChange={(e) => {
					switch (e.target.value) {
						case 'small':
							onPropChange('width', '25%', false, 0);
							onPropChange('width', '75%', false, 1);
							break;
						case 'middle':
							onPropChange('width', '35%', false, 0);
							onPropChange('width', '65%', false, 1);
							break;
						case 'big':
							onPropChange('width', '50%', false, 0);
							onPropChange('width', '50%', false, 1);
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
				<label>{language["Text"]} 1 position:
				<select onChange={(e) => onPropChange('float', e.target.value, false, 0)}>
					<option value="left">{language["left"]}</option>
					<option value="right">{language["right"]}</option>
				</select>
				</label>
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

export default OptionsText2x;
