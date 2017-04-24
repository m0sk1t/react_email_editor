import React from 'react';

const NodeTypeText = ({node, block_id, clickHandle}) => {
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
                    <td
                        dangerouslySetInnerHTML={{__html: node?node.options.text:'empty node'}}></td>
                </tr>
            </tbody>
        </table>
    );
};

export default NodeTypeText;
