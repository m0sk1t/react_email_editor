import React from 'react';
import { connect } from 'react-redux';
import { stylizeAll } from '../actions';

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs,
		common: state.common,
		language: state.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		stylizeAll: (prop, val) => {
			dispatch(stylizeAll(prop, val));
		}
	};
};

const Common = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ tabs, common, language, stylizeAll }) => {
	if (tabs && tabs.common) {
		return (
			<div
			style={{
				'overflowY': 'auto',
			}}
			>
				<label>{language["Common options"]}</label>
				<div>
					<label>{language["Color"]}: <input type="color" value={common.color} onChange={(e) => stylizeAll('color', e.target.value)} /></label>
				</div>
				<div>
					<label>{language["Background"]}: <input type="color" value={common.backgroundColor} onChange={(e) => stylizeAll('backgroundColor', e.target.value)} /></label>
				</div>
			</div>
			);
	}
	return null;
});

export default Common;