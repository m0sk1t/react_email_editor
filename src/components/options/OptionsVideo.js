import React from 'react';

const OptionsVideo = ({ block, language, onFileChange, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
			</div>
			<div>
				<label>{language["Link"]}:
				<input
				type="text"
				value={block.options.elements[0].link}
				onChange={(e) => {
					let videoId = '';
					switch (true) {
						case e.target.value.trim().indexOf('https://www.youtube.com/') === 0:
							videoId = e.target.value.trim().split('https://www.youtube.com/watch?v=')[1];
							break;
						default:
							return alert('Тип видеохостинга пока не поддерживается');
					}
					onPropChange('link', e.target.value.trim(), false, 0);
					onPropChange('source', videoId, false, 0);
				}} /></label>
			</div>
			<div>
				<label>
					{language["Add paddings"]}:
					<input
					type="checkbox"
					checked={block.options.container.padding === '0'? '': 'checked'}
					onChange={(e) => {
						onPropChange('padding', (block.options.container.padding === '0'? '10px': '0'), true);
						onPropChange('width', (block.options.container.padding === '0'? '550px': '570px'), false, 0);
						}
					} /></label>
			</div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
		</div>
	);
};

export default OptionsVideo;
