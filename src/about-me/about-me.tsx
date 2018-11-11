import * as React from "react";
import me from "../images/me.jpg";
import "./about-me.css";

export default class AboutMe extends React.Component {
  public render() {
    return (
      <div className="about-section">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img className="img-responsive" src={me} />
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="about-me section-space-padding">
              <h2>About Me</h2>

              <p>
                Always fascinated by the world of 3D, I learned by myself at the
                age of 13 some concepts in 3D, such as modeling, animation and
                creating simple video games. I continued to learn through the
                years and to do more 3D projects. Currently studying at
                Université Laval in Baccalauréat en art et science de
                l’animation, I am improving my skills in this field every day. I
                am passionate about what I do, and I hope you will see it
                through my portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
