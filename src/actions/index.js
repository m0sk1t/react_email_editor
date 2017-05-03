export const addBlock = (block, index) => {
    const id = Date.now();
    return {
        type: 'ADD_BLOCK',
        block,
        index,
        id,
    };
};

export const selectBlock = (id) => {
    return {
        type: 'SELECT_BLOCK',
        id
    };
};


export const swapBlocks = (id, index) => {
    return {
        type: 'SWAP_BLOCKS',
        index,
        id,
    };
};

export const stylishBlock = (propertyName, propertyValue, container, elementIndex) => {
    return {
        type: 'STYLISH_BLOCK',
        propertyValue,
        propertyName,
        elementIndex,
        container,
    };
};

export const rmBlock = (id) => {
    return {
        type: 'RM_BLOCK',
        id
    };
};
