import * as React from "react";
import { projects } from "./projects";
import "./projects-list.css";

export default class ProjectsList extends React.Component {
  public getAllTags() {
    const tags: string[] = [];

    for (const project of projects) {
      for (const tag of project.tags) {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      }
    }

    return tags;
  }

  public render() {
    return (
      <div id="portfolio" className="portfolio section-space-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h2>My Portfolio</h2>
                <p>Take a look and enjoy!</p>
              </div>
            </div>
          </div>

          <div className="row">
            <ul className="portfolio">
              <li className="filter" data-filter="all">
                all
              </li>
              {this.getAllTags().map((tag, i) => {
                return (
                  <li key={i} className="filter" data-filter={"." + tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="portfolio-inner">
            <div className="row">
              {projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className="col-md-4 col-sm-6 col-xs-12 mix modeling textures"
                  >
                    <div className="item">
                      <a
                        href={"../images/projects/" + project.image}
                        className="portfolio-popup"
                        title={project.title}
                        // description={project.description}
                      >
                        <img src={"../images/projects/" + project.image} />
                      </a>
                    </div>
                  </div>
                );
              })}
              {/* <div className="col-md-4 col-sm-6 col-xs-12 mix modeling textures">
                <div className="item">
                  <a
                    href="assets/portfolio/images/WineAndCheese.png"
                    className="portfolio-popup"
                    title="Still life, Wine and Cheese"
                    description="Here is my end-of-term project for my first session at the university. The goal of the project was to create a still life scene from reference images. For my scene, I decided to do still life with a theme of french snack and add a touch of picnic with a little square fabric. For my lights, I wanted to create the cozy atmosphere of chic restaurants.The modeling was done with Maya and ZBrush and the textures with Substance Painter and Arnold."
                  >
                    <img src="assets/portfolio/images/WineAndCheese.png" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="margin-top-80">
          <ul className="social-icon">
            {/* <li><a href="#" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a></li> */}
            {/* <li><a href="#" target="_blank" className="google-plus"><i className="fa fa-google-plus"></i></a></li> */}
            {/* <li><a href="#" target="_blank" className="dribbble"><i className="fa fa-dribbble"></i></a></li> */}
            <li>
              <a
                href="mailto:audrey_matte@hotmail.com?Subject=Hello"
                target="_top"
                className="twitter"
                title="Send me an email"
              >
                <i className="fa fa-envelope-o" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/StarNStuds"
                target="_blank"
                className="youtube"
                title="My Youtube Channel"
              >
                <i className="fa fa-youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dreey_drey/"
                target="_blank"
                className="instagram"
                title="My Instagram"
              >
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
