const templateId = (state = '', action) => {
	switch (action.type) {
		case 'TEMPLATE_SAVED':
			return action.templateId || state;
		default:
			return state;
	}
};

export default templateId;
