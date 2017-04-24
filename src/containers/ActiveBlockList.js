import { connect } from 'react-redux';

// import { rmTodo } from '../actions';
// import { addNode } from '../actions';
// import { rmNode } from '../actions';
import { selectNode } from '../actions';
import { selectBlock } from '../actions';
import BlockList from '../components/BlockList';

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNodeClick: (block_id, node_id) => {
            dispatch(selectNode(block_id, node_id));
            // dispatch(rmNode(block_id, node_id));
            // dispatch(addNode(block_id));
            // dispatch(selectNode(id));
        },
        onBlockClick: (id) => {
            //dispatch(addNode(id));
            dispatch(selectBlock(id));
        }
    };
};

const ActiveBlockList = connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockList);

export default ActiveBlockList;
