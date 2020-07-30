import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropDownVisible: false,
    };
  }

  toggleDropDown = () => {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="h-img-box">
            <header className="main-header">
              <div className="h-nav-bar">
                {this.state.dropDownVisible ? (
                  <nav className="mobile-menu">
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>ABOUT</span>
                    <span>TEAM</span>
                    <span>CONTACT</span>
                  </nav>
                ) : null}
                <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" />
                <div className="dropdown" onClick={this.toggleDropDown}>
                  {" "}
                  Menu{" "}
                </div>
                <div className="h-nav-list">
                  <span>SERVICES</span>
                  <span>PORTFOLIO</span>
                  <span>ABOUT</span>
                  <span>TEAM</span>
                  <span>CONTACT</span>
                </div>
              </div>
              <div className="content">
                <div className="h-Content">Welcome To Our Studio!</div>
                <div className="h-text-1">
                  <b>IT'S NICE TO MEET YOU</b>
                </div>
                <button className="h-btn-h1">TELL ME MORE</button>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
