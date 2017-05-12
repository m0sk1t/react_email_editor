import React from 'react';
import { connect } from 'react-redux';
import { saveTemplate, sendTestEmail } from '../actions';

const mapStateToProps = (state) => {
	return {
		id: state.templateId,
		language: state.language,
		template: state.template,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendTestEmail: (email, html) => {
			dispatch(sendTestEmail(email, html));
		},
		saveTemplate: (id, html, template) => {
			dispatch(saveTemplate(id, html, template));
		}
	};
};

const ActionsPanel = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ id, language, template, saveTemplate, sendTestEmail }) => {
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
			<span
			style={buttonStyle}
			title={language["Save template"]}
			onClick={() => {
				const emailSource = document.querySelector('#rootTable').innerHTML;
				const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
					<html>
					<head>
					<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
					<style type="text/css">
					table {border-collapse:separate;}
					a, a:link, a:visited {text-decoration: none; color: #00788a;} 
					a:hover {text-decoration: underline;}
					h2,h2 a,h2 a:visited,h3,h3 a,h3 a:visited,h4,h5,h6,.t_cht {color:#000 !important;}
					.ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
					.ExternalClass {width: 100%;}
					</style>
					</head>
					<body style="text-align: center">
					${emailSource}
					</body>
					</html>`;
				saveTemplate(id, html, template);
			}}
			>&#x2714;</span>
			<span
			title={language["Send test email"]}
			style={buttonStyle}
			onClick={() => {
				const emailSource = document.querySelector('#rootTable').innerHTML;
				const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
					<html>
					<head>
					<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
					<style type="text/css">
					table {border-collapse:separate;}
					a, a:link, a:visited {text-decoration: none; color: #00788a;} 
					a:hover {text-decoration: underline;}
					h2,h2 a,h2 a:visited,h3,h3 a,h3 a:visited,h4,h5,h6,.t_cht {color:#000 !important;}
					.ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
					.ExternalClass {width: 100%;}
					</style>
					</head>
					<body style="text-align: center">
					${emailSource}
					</body>
					</html>`;
				let email = prompt(language["Enter email"]);
				saveTemplate(email, html);
			}}
			>&#x2709;</span>
		</div>
		);
});

export default ActionsPanel;
