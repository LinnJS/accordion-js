import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./assets/logo.svg";
import "./styles/App.scss";
import Accordion from "./components/Accordion";

export default class App extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="wrapper">
        <header>
          <img alt="logo" src={logo} />
          <h1>Accordion.js</h1>
        </header>
        <div className="container">
          {users.map(user => {
            return (
              <Accordion
                key={user.id}
                title={user.name}
                bio={user.bio}
                photo={user.profile_pic_url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array
};
