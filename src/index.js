import React from 'react';
import ReactDOM from 'react-dom';

// import SearchBar from './components/search_bar'
import TileList from './components/tile/tilelist'



const App = () => {
    return (
        <div>
            <div className="row">
            <TileList />
                <br/>

            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.app'));