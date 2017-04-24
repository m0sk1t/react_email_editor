import nodes from './nodes';

const block = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOCK':
            return {
                id: action.id,
                nodes: action.nodes,
                options: action.options,
            };
        case 'SELECT_BLOCK':
            return {
                ...state,
                selected: true,
            };
        case 'STYLISH_BLOCK':
            let style = {};
            style[action.propertyName] = action.propertyValue;
            return Object.assign({}, state, {
                options: {
                    ...state.options,
                    ...style
                }
            });
        default:
            return state;
    }
};

const blocks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BLOCK':
            return [
                ...state,
                block(undefined, action)
            ];
        case 'RM_BLOCK':
            return state.filter(b => b.id !== action.id);

        case 'STYLISH_BLOCK':
            return state.map(b => b.selected? block(b, action): b);

        case 'SELECT_BLOCK':
            return state.map((b) => {
                if (b.id === action.id){
                    return block(b, action);
                } else {
                    b.selected = false;
                    return b;
                }
            });

        case 'RM_NODE':
        case 'ADD_NODE':
        case 'SELECT_NODE':
        case 'STYLISH_NODE':
            return state.map(b => {
                if(b.id === action.block_id || b.selected){
                    return Object.assign({}, b, {nodes: nodes(b.nodes, action)});
                } else {
                    return b;
                }
            });
        default:
            return state;
    }
};

export default blocks;
