import React from 'react';

const OptionsSocial = ({ block, onPropChange }) => {
	return (
		<div>
			<div>
				<label>Height: <input type="text" value={block.options.container.height} onChange={(e) => onPropChange('height', e.target.value, true)} /></label>
			</div>
			<div>
				<label>Color: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
			</div>
			<div>
				<label>Background: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>
					Align:
					<input type="range" min="0" max="2" step="1" onChange={(e) => {
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
					Type:
					<select onChange={(e) => {
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
		</div>
	);
};

export default OptionsSocial;
