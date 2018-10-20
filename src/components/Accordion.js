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
    const { title, children } = this.props;

    return (
      <div
        className={`panel ${this.state.isExpanded ? "is-expanded" : ""}`}
        onClick={e => this.handleToggle(e)}
      >
        <div className="panel-heading">
          <h2>{title}</h2>
        </div>
        <div className="panel-collapse">
          <div className="panel-body">{children}</div>
        </div>
      </div>
    );
  }
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
};
