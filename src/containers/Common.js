import React from 'react';
import { connect } from 'react-redux';
import { stylizeAll } from '../actions';

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs,
		common: state.common
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
)(({ tabs, common, stylizeAll }) => {
	if (tabs && tabs.common) {
		return (
			<div
			style={{
				'overflowY': 'auto',
			}}
			>
				Common options
				<div>
					<label>Color: <input type="color" value={common.color} onChange={(e) => stylizeAll('color', e.target.value)} /></label>
				</div>
				<div>
					<label>Background: <input type="color" value={common.backgroundColor} onChange={(e) => stylizeAll('backgroundColor', e.target.value)} /></label>
				</div>
			</div>
			);
	}
	return null;
});

export default Common;