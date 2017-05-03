import React from 'react';
import { connect } from 'react-redux';
import { setVisible } from '../actions';

const mapStateToProps = (state) => {
	return {
		visibility: state.visibility
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVisible: (tab) => {
			dispatch(setVisible(tab));
		}
	};
};

const Tabs = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ setVisible }) => {
	return (<div>
			<span
			onClick={()=> setVisible('blocks')}
			>BLOCKS</span>|
			<span
			onClick={()=> setVisible('common')}
			>COMMON</span>|
			<span
			onClick={()=> setVisible('options')}
			>OPTIONS</span>
		</div>);
});

export default Tabs;