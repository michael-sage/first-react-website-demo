import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';
import Contact from './components/Pages/Contact';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <PageWrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />

            <Route
              path="/about"
              component={About}
            />

            <Route
              path="/contact"
              component={Contact}
            />

            <Route
              path="/services"
              component={Services}
            />

            <Route
              path="/portfolio"
              component={Portfolio}
            />

            <Route
              path="/team"
              component={Team}
            />

          </PageWrapper>
        </Router>
      </div>
    );
  }
}

export default App;
