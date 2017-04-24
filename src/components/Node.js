import React from 'react';
import NodeTypeText from './nodes/NodeTypeText';
import NodeTypeImage from './nodes/NodeTypeImage';

const Node = ({ node, block_id, clickHandle }) => {
    switch (node.node_type) {
        case 'text':
            return <NodeTypeText node={node} block_id={block_id} clickHandle={clickHandle} />;
        case 'image':
            return <NodeTypeImage node={node} block_id={block_id} clickHandle={clickHandle} />;
        default:
            return;
    }
};

export default Node;
