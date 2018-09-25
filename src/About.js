import React from "react";
import "./About.css";

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="profile-photo">
                    <img id="photo-of-me" src={require('./img/me.jpg')} alt="Ingrid Wang" />
                </div>
                <p>software developer based in new york city.</p>
                <p>
                    also a jack of many other random trades including photography, dance, dressmaking, stop motion animation, film, piano, and last and let’s face it, least, knitting. but, as the saying goes, master of none (yet).
                </p>
                <div className="clearfloat"></div> 
            </div>
        );
    }
}

export default About;