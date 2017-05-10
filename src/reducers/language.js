const language = (state = {}, action) => {
	switch (action.type) {
		case 'LANGUAGE_LOADED':
			return action.language;

		default:
			return state;
	}
};

export default language;