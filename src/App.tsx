import * as React from "react";
import "./App.scss";

import AboutMe from "./about-me/about-me";
import Footer from "./footer/footer";
import Header from "./header/header";
import ProjectsList from "./projects-list/projects-list";
import AppRoutes from "./app-routes";

export default class App extends React.Component {
    render() {
        return (
            <AppRoutes>
                <div className="App">
                    <Header />
                    <AboutMe />
                    <ProjectsList />
                    <Footer />
                </div>
            </AppRoutes>
        );
    }
}
