export const addBlock = () => {
    const id = Date.now();
    return {
        type: 'ADD_BLOCK',
        id,
        nodes: [],
        options: {
            width: '100%',
            height: '100px',
            backgroundColor: '#' + id.toString().substr(6, 6),
        },
    };
};

export const selectBlock = (id) => {
    return {
        type: 'SELECT_BLOCK',
        id
    };
};

export const swapNodes = (block_id, from_id, to_id) => {
    return {
        type: 'SELECT_BLOCK',
        block_id,
        from_id,
        to_id,
    };
};

export const swapBlocks = (from_id, to_id) => {
    return {
        type: 'SELECT_BLOCK',
        from_id,
        to_id,
    };
};

export const stylishBlock = (propertyName, propertyValue) => {
    return {
        type: 'STYLISH_BLOCK',
        propertyValue,
        propertyName,
    };
};

export const stylishNode = (propertyName, propertyValue) => {
    return {
        type: 'STYLISH_NODE',
        propertyValue,
        propertyName,
    };
};

export const rmBlock = (id) => {
    return {
        type: 'RM_BLOCK',
        id
    };
};

export const addNode = (node_type) => {
    const id = Date.now();
    return {
        type: 'ADD_NODE',
        node_type,
        id,
        options: {
            text: node_type === 'text'? 'test text': '',
            width: '100px',
            height: '100px',
            display: 'inline-table',
            backgroundColor: '#' + id.toString().substr(6, 6),
            image_url: node_type === 'text'? '': 'https://www.w3schools.com/css/img_fjords.jpg',
        }
    };
};

export const rmNode = (block_id, node_id) => {
    return {
        type: 'RM_NODE',
        block_id,
        node_id,
    };
};

export const selectNode = (block_id, node_id) => {
    return {
        type: 'SELECT_NODE',
        block_id,
        node_id,
    };
};
