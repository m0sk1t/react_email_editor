import React from 'react';
import Node from './Node';

const BlockList = ({ blocks, onBlockClick, onNodeClick }) => (
    <table cellPadding="0" cellSpacing="0" role="presentation" style={{width:'80%'}}>
        <tbody>
            {blocks.map(block =>
                <tr
                    key={block.id}
                    onClick={() => onBlockClick(block.id)}
                >
                    <td
                        style={block.options}
                    >
                        {
                            block.nodes.map(node =>
                                <Node
                                    node={node}
                                    key={node.id}
                                    block_id={block.id}
                                    clickHandle={onNodeClick}
                                />
                            )
                        }
                    </td>
                </tr>
            )}
        </tbody>
    </table>
);

export default BlockList;
