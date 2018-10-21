import React, { Component } from "react";
import PropTypes from "prop-types";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { title, bio, photo } = this.props;

    return (
      <div
        className={`panel ${this.state.isExpanded ? "is-expanded" : ""}`}
        onClick={e => this.handleToggle(e)}
      >
        <div className="panel-heading">
          <h2>{title}</h2>
          <img src={photo} alt="User Photos" />
        </div>
        <div className="panel-collapse">
          <div className="panel-body">{bio}</div>
        </div>
      </div>
    );
  }
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  bio: PropTypes.string,
  photo: PropTypes.string
};
