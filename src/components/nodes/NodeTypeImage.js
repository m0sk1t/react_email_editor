import React from 'react';

const NodeTypeImage = ({node, block_id, clickHandle}) => {
    return (
        <table
            style={Object.assign({}, node.options, {
                display: 'inline-table'
            })}
            onClick={() => clickHandle(block_id, node.id)}
            cellPadding="0" cellSpacing="0" role="presentation"
        >
            <tbody>
                <tr>
                    <td>
                        <img
                            width={node.options.width || '100px'}
                            height={node.options.width || '100px'}
                            alt={node.node_type}
                            src={node.options.image_url}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default NodeTypeImage;
