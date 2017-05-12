const noCors = { "mode": "no-cors" };
const headersJSON = new Headers({
	'Accept': 'application/json',
	'Content-Type': 'application/json'
});
// const apiEndpoint = "http://localhost:8888";
const apiEndpoint = "";

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
	var formData = new FormData();
	formData.append('file', file);
	const params = {
		method: 'POST',
		body: formData,
		...noCors,
	};
	return fetch(`${apiEndpoint}/image`, params)
		.then(res => res.json())
		.then(json => json)
};

export const saveTemplate = ({ id, html, template }) => {
	const params = {
		...noCors,
		method: 'POST',
		headers: headersJSON,
		body: JSON.stringify({ html, template })
	};
	return fetch(`${apiEndpoint}/template/${id||'null'}`, params)
		.then(res => res.json())
		.then(json => json)
};

export const sendTestEmail = ({ email, html }) => {
	const params = {
		...noCors,
		method: 'POST',
		headers: headersJSON,
		body: JSON.stringify({ email, html })
	};
	return fetch(`${apiEndpoint}/send`, params)
		.then(res => res.json())
		.then(json => json)
};
