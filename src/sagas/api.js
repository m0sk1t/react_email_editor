window.wp && (window.wp.ajax.settings.url = window.ajaxurl);
const rootPath = document.location.href.indexOf('page=nm_email_editor') === -1? '/': `${document.location.origin}/wp-content/plugins/newsmine/include/email_editor/`;

export const getLanguage = () => {
	const lang = /^\w+/.exec(navigator.language)[0];
	return fetch(`${rootPath}translations/lang.${lang}.json`)
		.then(res => res.json())
		.then(json => json)
};

export const getComponents = () => {
	return fetch(`${rootPath}components.json`)
		.then(res => res.json())
		.then(json => json)
};

export const getTemplate = (templateId) => {
	var formData = new FormData();
	formData.append('id', templateId);
	formData.append('action', 'ee_get_template');
	return fetch(templateId?window.ajaxurl:`${rootPath}template.json`, {
		method: templateId?'POST':'GET',
		body: templateId?formData:null,
	})
		.then(res => res.json())
		.then(json => json)
};

export const saveImage = (file) => {
	var formData = new FormData();
	formData.append('file', file);
	formData.append('action', 'ee_save_image');
	const params = {
		method: 'POST',
		body: formData,
	};
	return fetch(window.ajaxurl, params)
		.then(res => res.json())
		.then(json => json)
};

export const saveTemplate = ({ id, html, name, template }) => {
	var formData = new FormData();
	formData.append('template', JSON.stringify(template));
	formData.append('action', 'ee_save_template');
	formData.append('html', html);
	formData.append('name', name);
	formData.append('id', id);
	const params = {
		mode: 'no-cors',
		method: 'POST',
		body: formData
	};
	return fetch(window.ajaxurl, params)
		.then(res => res.json())
		.then(json => json)
};

export const sendTestEmail = ({ email, html }) => {
	var formData = new FormData();
	formData.append('action', 'ee_send_email');
	formData.append('email', email);
	formData.append('html', html);
	const params = {
		method: 'POST',
		body: formData
	};
	return fetch(window.ajaxurl, params)
		.then(res => res.json())
		.then(json => json)
};
