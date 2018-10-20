import React, { Component } from "react";
import logo from "./assets/logo.svg";
import "./styles/App.scss";
import Accordion from "./components/Accordion";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <img alt="logo" src={logo} />
          <h1>Accordion.js</h1>
        </header>
        <div className="container">
          <Accordion title="Overview">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute.
          </Accordion>
          <Accordion title="Features">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute.
          </Accordion>
          <Accordion title="Reviews">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute.
          </Accordion>
        </div>
      </div>
    );
  }
}
