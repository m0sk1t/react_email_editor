import React from 'react';
import { connect } from 'react-redux';
import { stylishBlock } from '../actions';
import OptionsText from '../components/options/OptionsText';
import OptionsImage from '../components/options/OptionsImage';
import OptionsHeader from '../components/options/OptionsHeader';
import OptionsTextImage from '../components/options/OptionsTextImage';
import OptionsImageText from '../components/options/OptionsImageText';

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs,
		template: state.template
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPropChange: (prop, val, container, elementIndex) => {
			dispatch(stylishBlock(prop, val, container, elementIndex));
		}
	};
};

const Options = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ tabs, template, onPropChange }) => {
	if (tabs.options) {
		const block = template.filter(b => b.selected)[0];
		if (!block) return <div>Nothing selected</div>;
		switch (block.block_type) {
			case 'text':
				return <OptionsText block={block} onPropChange={onPropChange} />;
			case 'image':
				return <OptionsImage block={block} onPropChange={onPropChange} />;
			case 'header':
				return <OptionsHeader block={block} onPropChange={onPropChange} />;
			case 'text_image':
				return <OptionsTextImage block={block} onPropChange={onPropChange} />;
			case 'image_text':
				return <OptionsImageText block={block} onPropChange={onPropChange} />;
			default:
				return <div>Nothing selected</div>;
			}
		}
	return null;
});

export default Options;
