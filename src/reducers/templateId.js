const templateId = (state = '', action) => {
	switch (action.type) {
		case 'TEMPLATE_SAVED':
			alert(`ID: ${action.templateId}`);
			return action.templateId;
		default:
			return state;
	}
};

export default templateId;
