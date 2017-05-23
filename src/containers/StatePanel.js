import React from 'react';
import { connect } from 'react-redux';
import { rmBlock, undoChanges, redoChanges } from '../actions';

const mapStateToProps = (state) => {
	return {
		language: state.language,
		template: state.template,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		rmBlock: () => {
			dispatch(rmBlock());
		},undoChanges: () => {
			dispatch(undoChanges());
		},
		redoChanges: () => {
			dispatch(redoChanges());
		}
	};
};

const StatePanel = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ template, language, rmBlock, undoChanges, redoChanges }) => {
	const selectedBlock = template.filter((el) => el.selected);
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
		'backgroundColor': '#a33',
		'boxShadow': 'rgb(102, 102, 102) 2px 2px 5px 1px',
	}
	const deleteButton = selectedBlock.length? <span title={language["Delete selected block"]} onClick={() => rmBlock()} style={buttonStyle}>&#x2718;</span>: null;
	return (
		<div
		style={{
			'top': '3rem',
			'left': '35%',
			'position': 'fixed',
		}}
		>
			{deleteButton}
		</div>
	);
});

/*
			<span title={language["Undo changes"]} style={buttonStyle}>&#x21b6;</span>
			<span title={language["Redo changes"]} style={buttonStyle}>&#x21b7;</span>
 */

export default StatePanel;
