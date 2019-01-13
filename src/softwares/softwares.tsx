import * as React from "react";
import "./softwares.scss";
import { softwares } from "./softwares-list";


export default class Softwares extends React.Component {
    render() {
        return (
            <div id="softwares" className="softwares section-space-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="section-title">
                                <h2>Softwares used</h2>
                                <p>These are the softwares that I use often.</p>
                                {softwares.map(software => {
                                    return (

                                        <div className="col-xs-6 col-sm-3 col-md-2">
                                            <div className="thumbnail">
                                                <img src={process.env.PUBLIC_URL + "/softwares/" + software.image} />
                                                <div className="caption">
                                                    <h3>{software.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
