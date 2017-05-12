const noCors = { "mode": "no-cors" };
const apiEndpoint = "http://localhost:8888";

export const getLanguage = () => {
	const lang = /^\w+/.exec(navigator.language)[0];
	return fetch(`/translations/lang.${lang}.json`, { ...noCors })
		.then(res => res.json())
		.then(json => json)
};

export const getTemplate = (templateId) => {
	return fetch(templateId?`${apiEndpoint}/template/${templateId}`:`/template.json`, { ...noCors })
		.then(res => res.json())
		.then(json => json)
};

export const getComponents = () => {
	return fetch(`/components.json`, { ...noCors })
		.then(res => res.json())
		.then(json => json)
};

export const saveImage = (file) => {
	const params = {
		method: 'POST',
		body: file,
		...noCors,
	};
	return fetch(`${apiEndpoint}/image`, params)
		.then(res => res.json())
		.then(json => json)
};

export const saveTemplate = ({ id, html, template }) => {
	const params = {
		method: 'POST',
		...noCors,
		body: {
			html: html,
			template: template
		}
	};
	return fetch(`${apiEndpoint}/template/${id||'null'}`, params)
		.then(res => res.json())
		.then(json => json)
};

export const sendTestEmail = (email, templateHTML) => {
	const params = {
		method: 'POST',
		...noCors,
		body: {
			email,
			templateHTML
		}
	};
	return fetch(`${apiEndpoint}/send`, params)
		.then(res => res.json())
		.then(json => json)
};
