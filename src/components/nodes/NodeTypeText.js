import React from 'react';

const NodeTypeText = ({node, block_id, clickHandle}) => {
    const full_size = {
        width: '100%',
        height: '100%',
    }
    return (
        <table
            style={node?node.options: {color:'#3a3'}}
            onClick={() => clickHandle(block_id, node.id)}
            cellPadding="0" cellSpacing="0" role="presentation"
        >
            <tbody style={full_size}>
                <tr style={full_size}>
                    <td style={full_size} dangerouslySetInnerHTML={{__html: node?node.options.text:'empty node'}}></td>
                </tr>
            </tbody>
        </table>
    );
};

export default NodeTypeText;
