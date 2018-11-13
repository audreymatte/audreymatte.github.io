import * as React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  public render() {
    return (
      <div id="contact">
        <footer className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-left">
                <p>
                  <span>
                    <a href="#about" className="smoth-scroll">
                      About Me
                    </a>
                  </span>
                  {" | "}
                  <span>
                    <a href="#portfolio" className="smoth-scroll">
                      Portfolio
                    </a>
                  </span>
                </p>
              </div>

              <div className="col-md-4 text-center">
                <p>Copyright {new Date().getFullYear()} © Audrey Matte</p>
              </div>

              <div className="col-md-4 uipasta-credit text-right">
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
