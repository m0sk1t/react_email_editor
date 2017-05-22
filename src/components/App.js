import React from 'react';
import Tabs from '../containers/Tabs';
import { connect } from 'react-redux';
import Blocks from '../containers/Blocks';
import Common from '../containers/Common';
import { deselectBlocks } from '../actions';
import Options from '../containers/Options';
import BlockList from '../components/BlockList';
import StatePanel from '../containers/StatePanel';
import ActionsPanel from '../containers/ActionsPanel';

const mapStateToProps = (state) => {
	return {
		template: state.template
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deselectBlocks: () => {
			dispatch(deselectBlocks());
		}
	};
};

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ template, deselectBlocks }) => (
	<div
		style={{
			'height': '100%',
			'display': 'flex',
			'flexDirection': 'row',
		}}
	>
		<div
		style={{
			'zIndex': 1,
			'width': '25%',
			'height': '100%',
			'position': 'fixed',
			'backgroundColor': '#FAFAFA',
			'fontFamily': "'Play', sans-serif",
			'boxShadow': 'rgb(102, 102, 102) 3px 3px 10px 1px'
		}}
		>
			<Tabs />
			<Blocks />
			<Common />
			<Options />
		</div>
		<div
		style={{
			'width': '100%',
			'height': '100%',
			'overflowY': 'auto',
			'backgroundColor': '#F0F0F0'
		}}
		onClick={() => deselectBlocks()}
		>
			<StatePanel />
			<BlockList />
			<ActionsPanel />
		</div>
	</div>
));

export default App;
