import React from 'react';
import BlockText from './blocks/BlockText';
import BlockImage from './blocks/BlockImage';
import BlockHeader from './blocks/BlockHeader';
import BlockSocial from './blocks/BlockSocial';
import BlockText2x from './blocks/BlockText2x';
import BlockImage2x from './blocks/BlockImage2x';
import BlockImage3x from './blocks/BlockImage3x';
import BlockImageText from './blocks/BlockImageText';
import BlockSocialText from './blocks/BlockSocialText';

const Block = ({ block }) => {
	if (!block) return null;
	switch (block.block_type) {
		case 'text':
			return <BlockText blockOptions={block.options} />;
		case 'text2x':
			return <BlockText2x blockOptions={block.options} />;
		case 'image':
			return <BlockImage blockOptions={block.options} />;
		case 'image2x':
			return <BlockImage2x blockOptions={block.options} />;
		case 'image3x':
			return <BlockImage3x blockOptions={block.options} />;
		case 'header':
			return <BlockHeader blockOptions={block.options} />;
		case 'social':
			return <BlockSocial blockOptions={block.options} />;
		case 'image_text':
			return <BlockImageText blockOptions={block.options} />;
		case 'social_text':
			return <BlockSocialText blockOptions={block.options} />;
		default:
			return null;
	}
};

export default Block;
