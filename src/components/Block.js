import React from 'react';
import BlockText from './blocks/BlockText';
import BlockImage from './blocks/BlockImage';
import BlockHeader from './blocks/BlockHeader';
import BlockImageText from './blocks/BlockImageText';
import BlockTextImage from './blocks/BlockTextImage';

const Block = ({ block }) => {
	if (!block) return null;
	switch (block.block_type) {
		case 'text':
			return <BlockText blockOptions={block.options} />;
		case 'image':
			return <BlockImage blockOptions={block.options} />;
		case 'header':
			return <BlockHeader blockOptions={block.options} />;
		case 'image_text':
			return <BlockImageText blockOptions={block.options} />;
		case 'text_image':
			return <BlockTextImage blockOptions={block.options} />;
		default:
			return null;
	}
};

export default Block;
