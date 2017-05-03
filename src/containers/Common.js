import React from 'react';
import { connect } from 'react-redux';
//import { setVisible } from '../actions';

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVisible: (tab) => {
//			dispatch(setVisible(tab));
		}
	};
};

const Common = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ tabs, /*setVisible*/ }) => {
	if (tabs && tabs.common) {
		return (
			<div>
				Common options
			</div>
			);
	}
	return null;
});

export default Common;