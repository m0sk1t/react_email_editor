import React from 'react';

const OptionsSocial = ({ block, language, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>
					{language["Align"]}:
					<input
					value={(block.options.elements[0].textAlign === 'left'?0:(block.options.elements[0].textAlign === "right"?2:1))}
					type="range" min="0" max="2" step="1"
					onChange={(e) => {
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

export default OptionsSocial;
