import React, { Component } from 'react';
import ClientItem from './ClientItem';

//Images
import imgOne from '../assets/img/envato.jpg';
import imgTwo from '../assets/img/designmodo.jpg';
import imgThree from '../assets/img/themeforest.jpg';
import imgFour from '../assets/img/creative-market.jpg';

const clients = [
    {image: imgOne},
    {image: imgTwo},
    {image: imgThree},
    {image: imgFour}
];

class Clients extends Component {
    render() {
        return (
            <div className="py-5">
            <div className="container">
                <div className="row">
                    
                    {clients.map((item, index) => {
                        return <ClientItem {...item} key={index} />
                    })}

                </div>
            </div>
        </div>
        );
    }
}

export default Clients;
