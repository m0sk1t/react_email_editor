import React from 'react';

const OptionsSocialText = ({ block, language, onPropChange }) => {
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
					value={block.options.elements[0].ok_source.match(/_\w+/)[0].split('').splice(1).join('')}
					onChange={(e) => {
						const el = block.options.elements[0];
						onPropChange('ok_source', el.ok_source.replace(/ok_\w+/, `ok_${e.target.value}`), false, 0);
						onPropChange('vk_source', el.vk_source.replace(/vk_\w+/, `vk_${e.target.value}`), false, 0);
						onPropChange('youtube_source', el.youtube_source.replace(/youtube_\w+/, `youtube_${e.target.value}`), false, 0);
						onPropChange('facebook_source', el.facebook_source.replace(/facebook_\w+/, `facebook_${e.target.value}`), false, 0);
					}}>
						<option value="3d">3d</option>
						<option value="round">round</option>
						<option value="square">square</option>
						<option value="material">material</option>
					</select>
				 </label>
			</div>
			<div>
				<label>
					OK:
					<input type="checkbox" checked={block.options.elements[0].ok_display === ''? 'none': ''} onChange={(e) => onPropChange('ok_display', (block.options.elements[0].ok_display === ''? 'none': ''), false, 0)} />
					<input type="text" value={block.options.elements[0].ok_link} onChange={(e) => onPropChange('ok_link', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>
					VK:
					<input type="checkbox" checked={block.options.elements[0].vk_display === ''? 'none': ''} onChange={(e) => onPropChange('vk_display', (block.options.elements[0].vk_display === ''? 'none': ''), false, 0)} />
					<input type="text" value={block.options.elements[0].vk_link} onChange={(e) => onPropChange('vk_link', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>
					YT:
					<input type="checkbox" checked={block.options.elements[0].youtube_display === ''? 'none': ''} onChange={(e) => onPropChange('youtube_display', (block.options.elements[0].youtube_display === ''? 'none': ''), false, 0)} />
					<input type="text" value={block.options.elements[0].youtube_link} onChange={(e) => onPropChange('youtube_link', e.target.value, false, 0)} />
				</label>
			</div>
			<div>
				<label>
					FB:
					<input type="checkbox" checked={block.options.elements[0].facebook_display === ''? 'none': ''} onChange={(e) => onPropChange('facebook_display', (block.options.elements[0].facebook_display === ''? 'none': ''), false, 0)} />
					<input type="text" value={block.options.elements[0].facebook_link} onChange={(e) => onPropChange('facebook_link', e.target.value, false, 0)} />
				</label>
			</div>
		</div>
	);
};

export default OptionsSocialText;
