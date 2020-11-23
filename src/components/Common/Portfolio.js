import React, { Component } from 'react';
import PortfolioItem from "./PortfolioItem";

//Images
import imgOne from "../assets/img/01-thumbnail.jpg";
import imgTwo from "../assets/img/02-thumbnail.jpg";
import imgThree from "../assets/img/03-thumbnail.jpg";
import imgFour from "../assets/img/04-thumbnail.jpg";
import imgFive from "../assets/img/05-thumbnail.jpg";
import imgSix from "../assets/img/06-thumbnail.jpg";

const portfolio = [
    { title: 'Threads', subtitle: 'Illustration', image: imgOne },
    { title: 'Explore', subtitle: 'Graphic Design', image: imgTwo },
    { title: 'Finish', subtitle: 'Identity', image: imgThree },
    { title: 'Lines', subtitle: 'Branding', image: imgFour },
    { title: 'Southwest', subtitle: 'Website Design', image: imgFive },
    { title: 'Window', subtitle: 'Photography', image: imgSix }
];

class Portfolio extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index) => {
                            return <PortfolioItem {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;