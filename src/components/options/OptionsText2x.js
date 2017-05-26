import React from 'react';

const OptionsText2x = ({ block, language, onPropChange }) => {
	const fontSize = block.options.container.fontSize.match(/\d+/)?block.options.container.fontSize.match(/\d+/)[0]: '16';
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
			<div>
				<label>{language["Font size"]}: <input type="number" value={fontSize} onChange={(e) => onPropChange('fontSize', `${e.target.value}px`, true)} /></label>
			</div>
			<div>
				<label>
					{language["Font family"]}:
					<select style={{width: '50%'}} onChange={(e) => onPropChange('fontFamily', e.target.value, true)}>
						<option value="Georgia, serif">Georgia, serif</option>
						<option value="Tahoma, Geneva, sans-serif">Tahoma, Geneva, sans-serif</option>
						<option value="Verdana, Geneva, sans-serif">Verdana, Geneva, sans-serif</option>
						<option value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</option>
						<option value="Impact, Charcoal, sans-serif">Impact, Charcoal, sans-serif</option>
						<option value="'Times New Roman', Times, serif">"Times New Roman", Times, serif</option>
						<option value="'Courier New', Courier, monospace">"Courier New", Courier, monospace</option>
						<option value="'Arial Black', Gadget, sans-serif">"Arial Black", Gadget, sans-serif</option>
						<option value="'Lucida Console', Monaco, monospace">"Lucida Console", Monaco, monospace</option>
						<option value="'Comic Sans MS', cursive, sans-serif">"Comic Sans MS", cursive, sans-serif</option>
						<option value="'Trebuchet MS', Helvetica, sans-serif">"Trebuchet MS", Helvetica, sans-serif</option>
						<option value="'Lucida Sans Unicode', 'Lucida Grande', sans-serif">"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
						<option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
					</select>
				</label>
			</div>
			<div>
				<label>{language["Align"]}&nbsp;{language["Text"]} 1:
					<input type="range" min="0" max="3" step="1" value={block.options.elements[0].textSize} onChange={(e) => {
						switch (+e.target.value) {
							case 0:
								onPropChange('width', '50', false, 0);
								onPropChange('width', '500', false, 1);
								break;
							case 1:
								onPropChange('width', '100', false, 0);
								onPropChange('width', '450', false, 1);
								break;
							case 2:
								onPropChange('width', '200', false, 0);
								onPropChange('width', '350', false, 1);
								break;
							case 3:
								onPropChange('width', '275', false, 0);
								onPropChange('width', '275', false, 1);
								break;
							default:
								break;
						}
						onPropChange('textSize', e.target.value, false, 0);
					}} />
				</label>
			</div>
		</div>
	);
};

export default OptionsText2x;
