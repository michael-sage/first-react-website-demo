import React, { Component } from 'react';
import Header from '../Common/Header';
import headerImage from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from "../Common/Portfolio";
import About from "../Pages/About";
import Team from '../Common/Team';
import Clients from '../Common/Clients';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to my demo website!"
                    subtitle="It's nice to see you here :)"
                    buttonText="Tell me more"
                    link="/about"
                    showButton={true}
                    image={headerImage}
                />

                <Services/>
                <Portfolio/>
                <About/>
                <Team/>
                <Clients/>

            </div>
        );
    }
}

export default Home;