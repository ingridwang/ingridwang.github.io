import React from "react";
import "./SideNavigation.css";

class SideNavigation extends React.Component {
    handleClick = (page) => {
        this.props.switchPageHandler(page);
    }

    render() {
        return (
            <div id="sidenav">
                <button onClick = {() => this.handleClick(0)}>INGRID WANG</button>
                <div id="pages">
                    <button onClick = {() => this.handleClick(1)}>about</button>
                    <button onClick = {() => this.handleClick(2)}>experience</button>
                    <button onClick = {() => this.handleClick(3)}>crafts</button>
                    <button onClick = {() => this.handleClick(4)}>photography</button>
                    <button onClick = {() => this.handleClick(5)}>dance</button>
                    <button onClick = {() => this.handleClick(6)}>contact</button>
                </div>
            </div>
        );
    }
}

export default SideNavigation;