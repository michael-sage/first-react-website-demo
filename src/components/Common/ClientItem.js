import React, { Component } from 'react';

class ClientItem extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-6 my-3">
                <a href="#!"><img className="img-fluid d-block mx-auto" src={this.props.image} alt="" /></a>
            </div>
        );
    }
}

export default ClientItem;