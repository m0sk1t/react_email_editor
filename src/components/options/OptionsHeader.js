import React from 'react';

const OptionsHeader = ({ block, language, onPropChange }) => {
	const aligns = {
		"left": "0",
		"right": "2",
		"center": "1",
	}
	const initialAlign = aligns[block.options.elements[0].textAlign];
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>{language["Height"]}: <input type="text" value={block.options.container.height} onChange={(e) => onPropChange('height', e.target.value, true)} /></label>
			</div>
			<hr />
			<div>
				<label>
					{language["Align"]}:
					<input type="range" value={initialAlign} min="0" max="2" step="1" onChange={(e) => {
						let align = '';
						switch (+e.target.value) {
							case 0:
								align = 'left';
								break;
							case 1:
								align = 'center';
								break;
							case 2:
								align = 'right';
								break;
							default:
								align = 'left';
								break;
						}
						onPropChange('textAlign', align, false, 0);
					}} />
				</label>
			</div>
			<hr />
			<div>
				<label>{language["Color"]}: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
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
		</div>
	);
};

export default OptionsHeader;
