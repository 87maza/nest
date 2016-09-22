import React from 'react';
import ReactDOM from 'react-dom';

import TileList from './components/tile/tilelist'

const App = () => {
    return (
        <div>
            <div className="row">
            <TileList />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.app'));