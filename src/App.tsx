import * as React from "react";
import "./App.css";

import AboutMe from "./about-me/about-me";
import Footer from "./footer/footer";
import Header from "./header/header";
import ProjectsList from "./projects-list/projects-list";

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <ProjectsList />
        <Footer />
      </div>
    );
  }
}
