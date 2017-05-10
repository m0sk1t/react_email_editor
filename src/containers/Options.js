import React from 'react';
import { connect } from 'react-redux';
import { stylizeBlock } from '../actions';
import OptionsText from '../components/options/OptionsText';
import OptionsImage from '../components/options/OptionsImage';
import OptionsHeader from '../components/options/OptionsHeader';
import OptionsSocial from '../components/options/OptionsSocial';
import OptionsText2x from '../components/options/OptionsText2x';
import OptionsImage2x from '../components/options/OptionsImage2x';
import OptionsImage3x from '../components/options/OptionsImage3x';
import OptionsFeedback from '../components/options/OptionsFeedback';
import OptionsImageText from '../components/options/OptionsImageText';
import OptionsSocialText from '../components/options/OptionsSocialText';
import OptionsFeedbackText from '../components/options/OptionsFeedbackText';

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs,
		language: state.language,
		template: state.template
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPropChange: (prop, val, container, elementIndex) => {
			dispatch(stylizeBlock(prop, val, container, elementIndex));
		}
	};
};

const Options = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ tabs, language, template, onPropChange }) => {
	if (tabs.options) {
		const block = template.filter(b => b.selected)[0];
		if (!block) return <div><label>{language["Nothing selected"]}</label></div>;
		switch (block.block_type) {
			case 'text':
				return <OptionsText block={block} language={language} onPropChange={onPropChange} />;
			case 'image':
				return <OptionsImage block={block} language={language} onPropChange={onPropChange} />;
			case 'header':
				return <OptionsHeader block={block} language={language} onPropChange={onPropChange} />;
			case 'social':
				return <OptionsSocial block={block} language={language} onPropChange={onPropChange} />;
			case 'text2x':
				return <OptionsText2x block={block} language={language} onPropChange={onPropChange} />;
			case 'image2x':
				return <OptionsImage2x block={block} language={language} onPropChange={onPropChange} />;
			case 'image3x':
				return <OptionsImage3x block={block} language={language} onPropChange={onPropChange} />;
			case 'feedback':
				return <OptionsFeedback block={block} language={language} onPropChange={onPropChange} />;
			case 'image_text':
				return <OptionsImageText block={block} language={language} onPropChange={onPropChange} />;
			case 'social_text':
				return <OptionsSocialText block={block} language={language} onPropChange={onPropChange} />;
			case 'feedback_text':
				return <OptionsFeedbackText block={block} language={language} onPropChange={onPropChange} />;
			default:
				return <div><label>{language["Nothing selected"]}</label></div>;
			}
		}
	return null;
});

export default Options;
