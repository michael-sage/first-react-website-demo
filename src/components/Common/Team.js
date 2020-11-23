import React, { Component } from 'react';
import TeamMember from './TeamMember'

//Images
import imgOne from '../assets/img/1.jpg';
import imgTwo from '../assets/img/2.jpg';
import imgThree from '../assets/img/3.jpg';



const teamMembers = [
    { person: 'Kay Garland', jobTitle: 'Lead Designer', image: imgOne },
    { person: 'Larry Parker', jobTitle: 'Lead Marketer', image: imgTwo },
    { person: 'Diana Petersen', jobTitle: 'Lead Developer', image: imgThree }
];

class Team extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {teamMembers.map((item, index) => {
                            return <TeamMember {...item} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;