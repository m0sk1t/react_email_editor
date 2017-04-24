import React from 'react';
import Node from './Node';

const Block = ({ onNodeClick, block_id, options, nodes }) => (
    <tr
        style={options}
    >
        <td>
            {
                nodes.map((node)=>
                    <Node
                        key={node.id}
                        node={node}
                        onClick={() => onNodeClick(block_id, node.id)}
                    />
                )
            }
        </td>
    </tr>
);

export default Node;
