import React from 'react';

const OptionsFeedbackText = ({ block, language, onPropChange }) => {
	const fontSize = block.options.container.fontSize.match(/\d+/)?block.options.container.fontSize.match(/\d+/)[0]: '16';
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
			<hr />
			<div>
				<label>{language["Font size"]}: <input type="number" value={fontSize.match(/\d+/)[0]} onChange={(e) => onPropChange('fontSize', `${e.target.value}px`, true)} /></label>
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
			<hr />
			<div>
				<label>
					{language["Icons area size"]}:
					<input type="range" min="0" max="3" step="1" value={block.options.elements[0].iconsSize} onChange={(e) => {
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
						onPropChange('iconsSize', e.target.value, false, 0);
					}} />
				</label>
			</div>
			<div>
				<label>{language["Icons position"]}:
				<select onChange={(e) => onPropChange('textAlign', e.target.value, false, 0)}>
					<option value="left">{language["left"]}</option>
					<option value="right">{language["right"]}</option>
				</select>
				</label>
			</div>
			<div>
				<label>
					{language["Icons type"]}:
					<select
					value={block.options.elements[0].like_source.match(/_\w+/)[0].split('').splice(1).join('')}
					onChange={(e) => {
						const el = block.options.elements[0];
						onPropChange('like_source', el.like_source.replace(/like_\w+/, `like_${e.target.value}`), false, 0);
						onPropChange('dislike_source', el.dislike_source.replace(/dislike_\w+/, `dislike_${e.target.value}`), false, 0);
						onPropChange('neutral_source', el.neutral_source.replace(/neutral_\w+/, `neutral_${e.target.value}`), false, 0);
					}}>
						<option value="3d">3d</option>
						<option value="round">round</option>
						<option value="square">square</option>
						<option value="material">material</option>
					</select>
				 </label>
			</div>
			<hr />
			<div>
				<label>
					{language["Like"]}:
					<input type="checkbox" checked={block.options.elements[0].like_display === ''? 'none': ''} onChange={(e) => onPropChange('like_display', (block.options.elements[0].like_display === ''? 'none': ''), false, 0)} />
					<input type="text" value={block.options.elements[0].like_link} onChange={(e) => onPropChange('like_link', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>
					{language["Dislike"]}:
					<input type="checkbox" checked={block.options.elements[0].dislike_display === ''? 'none': ''} onChange={(e) => onPropChange('dislike_display', (block.options.elements[0].dislike_display === ''? 'none': ''), false, 0)} />
					<input type="text" value={block.options.elements[0].dislike_link} onChange={(e) => onPropChange('dislike_link', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>
					{language["Neutral"]}:
					<input type="checkbox" checked={block.options.elements[0].neutral_display === ''? 'none': ''} onChange={(e) => onPropChange('neutral_display', (block.options.elements[0].neutral_display === ''? 'none': ''), false, 0)} />
					<input type="text" value={block.options.elements[0].neutral_link} onChange={(e) => onPropChange('neutral_link', e.target.value, false, 0)} />
				</label>
			</div>
		</div>
	);
};

export default OptionsFeedbackText;
