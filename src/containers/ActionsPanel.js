import React from 'react';
import { connect } from 'react-redux';
import { saveTemplate, sendTestEmail, deselectBlocks } from '../actions';

const mapStateToProps = (state) => {
	return {
		id: state.templateId,
		language: state.language,
		template: state.template,
		templateName: state.common.templateName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendTestEmail: (email, html) => {
			deselectBlocks();
			dispatch(sendTestEmail(email, html));
		},
		saveTemplate: (id, html, name, template) => {
			deselectBlocks();
			dispatch(saveTemplate(id, html, name, template));
		}
	};
};

const ActionsPanel = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ id, language, template, templateName, saveTemplate, sendTestEmail }) => {
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
			'top': '3rem',
			'right': '5%',
			'position': 'fixed',
		}}
		>
			<span
			style={buttonStyle}
			title={language["Save template"]}
			onClick={() => {
				let emailSource = document.querySelector('#rootTable').innerHTML;
				if (!templateName) {
					return alert('Имя шаблона не задано! Перейдите на вкладку "Общие"');
				}
				emailSource = emailSource.replace(/&nbsp;/ig, " ").replace(/&quot;/ig, "\"").replace(/<table id="rootTemplate"/, '<table align="center" id="rootTemplate"');
				template = JSON.parse(JSON.stringify(template).replace(/&nbsp;/ig, " ").replace(/&quot;/ig, "\""));
				saveTemplate(id || 0, emailSource, templateName, template);
			}}
			>&#x2714;</span>
			<span
			title={language["Send test email"]}
			style={buttonStyle}
			onClick={() => {
				let emailSource = document.querySelector('#rootTable').innerHTML;
				let email = prompt(language["Enter email"]);
				emailSource = emailSource.replace(/&nbsp;/ig, " ").replace(/&quot;/ig, "\"").replace(/<table id="rootTemplate"/, '<table align="center" id="rootTemplate"');
				sendTestEmail(email, emailSource);
			}}
			>&#x2709;</span>
		</div>
		);
});

export default ActionsPanel;
