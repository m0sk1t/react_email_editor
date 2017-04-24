import React from 'react'
import { connect } from 'react-redux'
import { addBlock } from '../actions'
import { addNode } from '../actions'

const AddItem = connect()(({ dispatch }) => {
    let type = 'text';
    return <div>
        <button onClick={e => dispatch(addBlock())}>Add Block</button>
        <button onClick={e => dispatch(addNode(type))}>Add Node</button>
        <select onChange={e => type = e.target.value}>
            <option value="text">text</option>
            <option value="image">image</option>
        </select>
    </div>
});

export default AddItem
