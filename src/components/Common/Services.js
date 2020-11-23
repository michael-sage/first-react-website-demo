import React, { Component } from 'react';
import SingleService from './SingleService';

const loremIspum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat pharetra mi non varius. In dui nisl, egestas nec mattis et, sodales nec dui.'
const services = [
    {title:'E-Commerce', desc:loremIspum, icon: 'fa-shopping-cart'},
    {title:'Responsive Design', desc:loremIspum, icon: 'fa-laptop'},
    {title:'Web Security', desc:loremIspum, icon: 'fa-lock'}
];

class Services extends Component {
    render() {
        return (
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    {services.map((service, index) => {
                        return <SingleService {...service} key={index} />
                    })}
                    
                </div>
            </div>
        </section>
        );
    }
}

export default Services;