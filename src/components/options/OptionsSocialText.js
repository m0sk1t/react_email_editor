import React from 'react';

const OptionsSocialText = ({ block, onPropChange }) => {
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
			<div>
				<label>Icons size:
				<select onChange={(e) => {
					switch (e.target.value) {
						case 'Tiny':
							onPropChange('width', '15%', false, 0);
							onPropChange('width', '85%', false, 1);
							break;
						case 'Small':
							onPropChange('width', '25%', false, 0);
							onPropChange('width', '75%', false, 1);
							break;
						case 'Middle':
							onPropChange('width', '35%', false, 0);
							onPropChange('width', '65%', false, 1);
							break;
						case 'Big':
							onPropChange('width', '50%', false, 0);
							onPropChange('width', '50%', false, 1);
							break;
						default:
							break;
					}
				}}>
					<option value="Tiny">Tiny</option>
					<option value="Small">Small</option>
					<option value="Middle">Middle</option>
					<option value="Big">Big</option>
				</select>
				</label>
			</div>
			<div>
				<label>Icons position:
				<select onChange={(e) => onPropChange('float', e.target.value, false, 0)}>
					<option value="left">left</option>
					<option value="right">right</option>
				</select>
				</label>
			</div>
		</div>
	);
};

export default OptionsSocialText;
