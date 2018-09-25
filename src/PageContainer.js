import React from "react";
import SideNavigation from "./SideNavigation";
import WordSearch from "./WordSearch";
import About from "./About";
import Experience from "./Experience";
import Crafts from "./Crafts";
import Photography from "./Photography";
import Dance from "./Dance";
import Contact from "./Contact";
import "./index.css";

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
        };
        this.getMainContent.bind(this);
    }

    switchPageHandler = (page) => {
        this.setState({activePage: page});
    }

    getMainContent() {
        switch (this.state.activePage) {
            case 0:
                return <WordSearch />;
            case 1:
                return <About />;
            case 2:
                return <Experience />;
            case 3:
                return <Crafts />;
            case 4:
                return <Photography />;
            case 5:
                return <Dance />;
            case 6:
                return <Contact />;
            default:
                return <WordSearch />;
        }
    }

    render() {
        return (
            <div>
                <SideNavigation switchPageHandler={this.switchPageHandler} />
                <div id="main">
                    {this.getMainContent()}
                </div>
            </div>
        );
    }
}

export default PageContainer;