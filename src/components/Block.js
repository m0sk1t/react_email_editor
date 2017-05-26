import React from 'react';
import BlockHr from './blocks/BlockHr';
import BlockText from './blocks/BlockText';
import BlockImage from './blocks/BlockImage';
import BlockPosts from './blocks/BlockPosts';
import BlockVideo from './blocks/BlockVideo';
import Block3Icons from './blocks/Block3Icons';
import BlockButton from './blocks/BlockButton';
import BlockHeader from './blocks/BlockHeader';
import BlockSocial from './blocks/BlockSocial';
import BlockText2x from './blocks/BlockText2x';
import BlockImage2x from './blocks/BlockImage2x';
import BlockImage3x from './blocks/BlockImage3x';
import BlockFeedback from './blocks/BlockFeedback';
import BlockImageText from './blocks/BlockImageText';
import BlockPostsTitle from './blocks/BlockPostsTitle';
import BlockSocialText from './blocks/BlockSocialText';
import BlockFeedbackText from './blocks/BlockFeedbackText';

const Block = ({ block }) => {
	if (!block) return null;
	switch (block.block_type) {
		case 'hr':
			return <BlockHr id={block.id} blockOptions={block.options} />;
		case 'text':
			return <BlockText id={block.id} blockOptions={block.options} />;
		case 'image':
			return <BlockImage id={block.id} blockOptions={block.options} />;
		case 'posts':
			return <BlockPosts id={block.id} blockOptions={block.options} />;
		case 'video':
			return <BlockVideo id={block.id} blockOptions={block.options} />;
		case '3_icons':
			return <Block3Icons id={block.id} blockOptions={block.options} />;
		case 'button':
			return <BlockButton id={block.id} blockOptions={block.options} />;
		case 'header':
			return <BlockHeader id={block.id} blockOptions={block.options} />;
		case 'social':
			return <BlockSocial id={block.id} blockOptions={block.options} />;
		case 'text2x':
			return <BlockText2x id={block.id} blockOptions={block.options} />;
		case 'image2x':
			return <BlockImage2x id={block.id} blockOptions={block.options} />;
		case 'image3x':
			return <BlockImage3x id={block.id} blockOptions={block.options} />;
		case 'feedback':
			return <BlockFeedback id={block.id} blockOptions={block.options} />;
		case 'image_text':
			return <BlockImageText id={block.id} blockOptions={block.options} />;
		case 'posts_title':
			return <BlockPostsTitle id={block.id} blockOptions={block.options} />;
		case 'social_text':
			return <BlockSocialText id={block.id} blockOptions={block.options} />;
		case 'feedback_text':
			return <BlockFeedbackText id={block.id} blockOptions={block.options} />;
		default:
			return null;
	}
};

export default Block;
