import React from "react";
import SideNavigation from "./SideNavigation";
import WordSearch from "./WordSearch";
import "./index.css";

class PageContainer extends React.Component {
    render() {
        return (
            <div>
                <SideNavigation />
                <div id="main">
                    <WordSearch />
                </div>
            </div>
        );
    }
}

export default PageContainer;