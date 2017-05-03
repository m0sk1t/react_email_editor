import React from 'react';
import Tabs from '../containers/Tabs';
import Blocks from '../containers/Blocks';
import Common from '../containers/Common';
import Options from '../containers/Options';
import BlockList from '../components/BlockList';

const App = () => (
	<div
		style={{
			'height': '100%',
			'display': 'flex',
			'flexDirection': 'row',
		}}
	>
		<div style={{
			'zIndex': 1,
			'width': '20%',
			'height': '100%',
			'overflowY': 'auto',
			'backgroundColor': '#FAFAFA',
			'boxShadow': 'rgb(102, 102, 102) 3px 3px 10px 1px'
		}}>
			<Tabs />
			<Blocks />
			<Common />
			<Options />
		</div>
		<div style={{
			'width': '80%',
			'height': '100%',
			'overflowY': 'auto',
			'backgroundColor': '#F3F3F3'
		}}>
			<BlockList />
		</div>
	</div>
);

export default App;
