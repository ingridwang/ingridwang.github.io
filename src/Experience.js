import React from "react";
import "./Experience.css";

class Experience extends React.Component {
    render() {
        return (
            <div className="experience">
                <h3>
                    {"work"}
                </h3>
                <p>
                    {"facebook - software engineer (new york city, 2018-present)"}
                </p>
                <h3>
                    {"education"}
                </h3>
                <p>
                    {"university of southern california - b.s. computer science (los angeles, 2018)"}<br />
                    {"minor in cinematic arts"}
                </p>
                <h3>
                    {"projects"}
                </h3>
                <p>
                    {"the queen's speech - treehacks most polished award (2016)"}<br />
                </p>
            </div>
        );
    }
}

export default Experience;