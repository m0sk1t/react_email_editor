import React from 'react';
import { connect } from 'react-redux';
import { saveTemplate, sendTestEmail } from '../actions';

const mapStateToProps = (state) => {
	return {
		template: state.template
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveTemplate: () => {
			dispatch(saveTemplate());
		},
		sendTestEmail: () => {
			dispatch(sendTestEmail());
		}
	};
};

const ActionsPanel = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ template, saveTemplate, sendTestEmail }) => {
	const buttonStyle = {
		'width': '3rem',
		'margin': '1rem',
		'height': '3rem',
		'color': '#FAFAFA',
		'display': 'flex',
		'alignItems': 'center',
		'justifyContent': 'center',
		'fontSize': '2rem',
		'cursor': 'pointer',
		'borderRadius': '50%',
		'backgroundColor': '#3a3',
		'boxShadow': 'rgb(102, 102, 102) 2px 2px 5px 1px',
	}
	return (
		<div
		style={{
			'top': '1rem',
			'right': '5%',
			'position': 'fixed',
		}}
		>
			<span title="Save template" style={buttonStyle}>&#128190;</span>
			<span title="Send test email" style={buttonStyle}>&#153;</span>
		</div>
		);
});

export default ActionsPanel;