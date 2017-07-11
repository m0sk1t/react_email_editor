window.wp && (window.wp.ajax.settings.url = window.ajaxurl);
const credentials = 'same-origin';
const headers = new Headers({
	'Accept': 'aplication/json',
	'Content-type': 'application/x-www-form-urlencoded'
})
const rootPath = document.location.href.indexOf('page=nm_email_editor') === -1? '/': `${document.location.origin}/wp-content/plugins/newsmine/include/email_editor/`;

export const getLanguage = () => {
	const lang = /^\w+/.exec(navigator.language)[0];
	return fetch(`${rootPath}translations/lang.${lang}.json`, {credentials})
		.then(res => res.json())
		.then(json => json)
};

export const getComponents = () => {
	return fetch(`${rootPath}components.json`, {credentials})
		.then(res => res.json())
		.then(json => json)
};

export const getTemplate = (templateId) => {
	return fetch(new Request(templateId?window.ajaxurl:`${rootPath}template.json`, {
			headers,
			credentials,
			method: templateId?'POST':'GET',
			body: templateId?encodeURI(`id=${templateId}&action=ee_get_template`):null,
		}))
		.then(res => res.json())
		.then(json => json)
};

export const saveImage = (file) => {
	let formData = new FormData();
	formData.append('file', file);
	formData.append('action', 'ee_save_image');
	const params = {
		credentials,
		method: 'POST',
		body: formData
	};
	return fetch(new Request(window.ajaxurl, params))
		.then(res => res.json())
		.then(json => json)
};

export const saveTemplate = ({ id, html, name, template }) => {
	const params = {
		headers,
		credentials,
		method: 'POST',
		body:	encodeURI(`id=${id||0}
				&html=${html}
				&name=${name}
				&template=${JSON.stringify(template)}
				&action=ee_save_template`),
	}
	return fetch(new Request(window.ajaxurl, params))
		.then(res => res.json())
		.then(json => json)
};

export const sendTestEmail = ({ email, html }) => {
	const params = {
		headers,
		credentials,
		method: 'POST',
		body:	encodeURI(`html=${html}
				&email=${email}
				&action=ee_send_email`),
	};
	return fetch(new Request(window.ajaxurl, params))
		.then(res => res.json())
		.then(json => json)
};