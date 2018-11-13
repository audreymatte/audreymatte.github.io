import * as React from "react";
import "./header.css";

export default class Header extends React.Component {
  public render() {
    return (
      <div id="home" className="home-section">
        <div className="header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="logo">
                  <a href="index-2.html">Audrey Matte</a>
                </div>
              </div>

              <div className="col-sm-9">
                <div className="navigation-menu">
                  <div className="navbar">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div className="navbar-collapse collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li className="active">
                          <a className="smoth-scroll" href="#home">
                            Home
                            <div className="ripple-wrapper" />
                          </a>
                        </li>
                        <li>
                          <a className="smoth-scroll" href="#about">
                            About
                          </a>
                        </li>
                        <li>
                          <a className="smoth-scroll" href="#portfolio">
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a className="smoth-scroll" href="#contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="home-section-background"
          data-stellar-background-ratio="0.6"
        >
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="header-text">
                      <p>Hi! My name is Audrey Matte, and I am a</p>
                      <h2>
                        <span className="typing" />
                      </h2>

                      <div className="margin-top-60">
                        <a
                          className="button button-style button-style-icon fa fa-long-arrow-right smoth-scroll"
                          href="#portfolio"
                        >
                          View Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
