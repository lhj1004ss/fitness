import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../images/logo.jpeg";

export class navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="logo" src={logo} alt="logo"></img>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon"></FaAlignJustify>
            </button>
          </div>
          <div className="">
            <ul className="nav-links">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/BenchPress">benchPress</Link>
              </li>
              <li>
                <Link to="/DeadLift">deadLift</Link>
              </li>
              <li>
                <Link to="/Squat">squat</Link>
              </li>
              <li>
                <Link to="/Login">login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
