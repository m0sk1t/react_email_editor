import React from 'react';
import TinyMCE from 'react-tinymce';

const OptionsFeedbackText = ({ block, language, onPropChange }) => {
	return (
		<div>
			<div>
				<label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
			</div>
			<div>
				<label>
					{language["Icons area size"]}:
					<input type="range" min="0" max="3" step="1" value={block.options.elements[0].iconsSize} onChange={(e) => {
						switch (+e.target.value) {
							case 0:
								onPropChange('width', '15%', false, 0);
								onPropChange('width', '85%', false, 1);
								break;
							case 1:
								onPropChange('width', '25%', false, 0);
								onPropChange('width', '75%', false, 1);
								break;
							case 2:
								onPropChange('width', '35%', false, 0);
								onPropChange('width', '65%', false, 1);
								break;
							case 3:
								onPropChange('width', '50%', false, 0);
								onPropChange('width', '50%', false, 1);
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
				<select onChange={(e) => onPropChange('float', e.target.value, false, 0)}>
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
			<div>
				<label>
					{language["Text"]}:
					<TinyMCE
						content={block.options.elements[1].text}
						config={{
						  plugins: 'link image code textcolor colorpicker',
						  toolbar: 'undo redo | forecolor backcolor |bold italic | alignleft aligncenter alignright | code'
						}}
						onChange={(e) => onPropChange('text', e.target.getContent(), false, 1)}
					 />
				 </label>
			</div>
		</div>
	);
};

export default OptionsFeedbackText;
