export const addBlock = (block, index) => {
	const id = Date.now();
	return {
		type: 'ADD_BLOCK',
		block,
		index,
		id,
	};
};

export const rmBlock = () => {
	return {
		type: 'RM_BLOCK'
	};
};

export const selectBlock = (id) => {
	return {
		type: 'SELECT_BLOCK',
		id
	};
};

export const deselectBlocks = () => {
	return {
		type: 'DESELECT_BLOCKS'
	};
};

export const swapBlocks = (id, index) => {
	return {
		type: 'SWAP_BLOCKS',
		index,
		id,
	};
};

export const stylizeBlock = (propertyName, propertyValue, container, elementIndex) => {
	return {
		type: 'STYLIZE_BLOCK',
		propertyValue,
		propertyName,
		elementIndex,
		container,
	};
};

export const stylizeAll = (propertyName, propertyValue) => {
	return {
		type: 'STYLIZE_ALL',
		propertyValue,
		propertyName,
	};
};

export const setVisible = (tab) => {
	return {
		type: 'SET_VISIBLE',
		tab
	};
};

export const selectComponent = (index) => {
	return {
		type: 'SELECT_COMPONENT',
		index
	};
};


export const undoChanges = ()=>{};
export const redoChanges = ()=>{};

export const addImage = (block, index, file) => {
	return {
		type: 'ADD_IMAGE',
		block,
		index,
		file,
	};
};

export const saveTemplate = ()=>{};
export const sendTestEmail = ()=>{};
