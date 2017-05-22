const block = (state, action) => {
	switch (action.type) {

		case 'IMAGE_ADDED':
			const options = {
				options: {
					container: state.options.container,
					elements: state.options.elements.map((el, i) => {
						if (i === +action.index) {
							el.source = action.image;
							return el;
						} else {
							return el;
						}
					})
				}
			};
			return Object.assign({}, state, options);

		case 'SELECT_BLOCK':
			return {
				...state,
				selected: true,
			};
		
		case 'STYLIZE_ALL':
			if (state.options.container.customStyle) return state;
			let containerStyle = {};
			containerStyle[action.propertyName] = action.propertyValue;
			const change = {
				options: {
					elements: state.options.elements,
					container: Object.assign({}, state.options.container, containerStyle),
				}
			}
			return Object.assign({}, state, change);
		
		case 'STYLIZE_BLOCK':
			let style = {};
			const customStyle = ((action.propertyName === 'color') || (action.propertyName === 'backgroundColor'));
			style.customStyle = customStyle;
			style[action.propertyName] = action.propertyValue;
			if (action.container) {
				const change = {
					options: {
						elements: state.options.elements,
						container: Object.assign({}, state.options.container, style),
					}
				}
				return Object.assign({}, state, change);
			} else {
				const change = {
					options: {
						container: state.options.container,
						elements: state.options.elements.map((el, i) => {
							if (action.elementIndex === i) {
								return Object.assign({}, el, style);
							}
							return el;
						})
					}
				}
				return Object.assign({}, state, change);
			}
		default:
			return state;
	}
};

const template = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BLOCK':
			const first = state.slice(0, action.index);
			const last = state.slice(action.index, state.length);
			const new_block = Object.assign({}, action.block, {id: action.id})
			return [
				...first,
				new_block,
				...last
			];

		case 'SWAP_BLOCKS':
			const target = state.filter(e => e.id === action.id)[0];
			const filtered = state.filter(e => e.id !== action.id);
			const head = filtered.slice(0, action.index);
			const tail = filtered.slice(action.index, state.length - 1);
			return [
				...head,
				target,
				...tail,
			];

		case 'RM_BLOCK':
			if (state.length > 1) {
				return state.filter(b => !b.selected);
			} else {
				alert("Должен остаться хотя бы один активный блок!");
				return state;
			}

		case 'IMAGE_ADDED':
			return state.map(b => b.id === action.block.id? block(b, action): b);

		case 'STYLIZE_BLOCK':
			return state.map(b => b.selected? block(b, action): b);

		case 'STYLIZE_ALL':
			return state.map(b => block(b, action));

		case 'TEMPLATE_LOADED':
			return action.template;

		case 'DESELECT_BLOCKS':
			return state.map((b) => {b.selected = false; return b;});

		case 'SELECT_BLOCK':
			return state.map((b) => {
				if (b.id === action.id){
					return block(b, action);
				} else {
					b.selected = false;
					return b;
				}
			});

		default:
			return state;
	}
};

export default template;
