import React from 'react';
import Options from '../containers/Options';
import ActiveBlockList from '../containers/ActiveBlockList';

const App = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'row',
        }}
    >
        <Options />
        <ActiveBlockList />
    </div>
);

export default App;
