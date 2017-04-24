import React from 'react';

const NodeTypeImage = ({node, block_id, clickHandle}) => {
    const full_size = {
        width: '100%',
        height: '100%',
        display: 'block'
    }
    return (
        <table
            style={{
                display: 'table-cell'
            }}
            onClick={() => clickHandle(block_id, node.id)}
            cellPadding="0" cellSpacing="0" role="presentation"
        >
            <tbody style={full_size}>
                <tr style={full_size}>
                    <td style={full_size}>
                        <img
                            alt={node.node_type}
                            src={node.options.image_url}
                            style={node?node.options: {color:'#3a3'}}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default NodeTypeImage;
