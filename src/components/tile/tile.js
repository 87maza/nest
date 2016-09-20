//picture left and text right with link tag
//need photo props and text props

import React, {Component} from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-lg-3 col-xs-1 bg-warning">
               <h1>{this.props.title}</h1>
                <br />
                <img src={this.props.image} className="img-fluid" width="304" height="236" />
            </div>
        )
    }
};


export default Tile;
