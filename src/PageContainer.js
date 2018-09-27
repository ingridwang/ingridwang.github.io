import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import WordSearch from "./WordSearch";
import About from "./About";
import Experience from "./Experience";
import Crafts from "./Crafts";
import Photography from "./Photography";
import Dance from "./Dance";
import Contact from "./Contact";
import "./index.css";
import "./SideNavigation.css";

const hoverIndexNull = -1;

class HoverPageLink extends React.Component {
    mouseEnter = () => {
        this.props.hoverEnterCallback(this.props.id);
    }
    mouseLeave = () => {
        this.props.hoverExitCallback(this.props.id);
    }
    render() {
        return (
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <NavLink to={"/" + this.props.title} className="page-link">{this.props.title}</NavLink>
            </div>
        );
    }
}

class PageContainer extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            hoverIndex: hoverIndexNull
        }
    }

    hoverEnter = (index) => {
        this.setState({hoverIndex: index});
        console.log("enter: " + index);
    }

    hoverExit = () => {
        this.setState({hoverIndex: hoverIndexNull});
        console.log("exit");
    }

    render() {
        const SideNavigation = () => (
            <div id="sidenav">
                <NavLink to="/" className="home-page-link">INGRID WANG</NavLink>
                <div id="pages">
                    <HoverPageLink hoverEnterCallback={() => this.hoverEnter(0)} hoverExitCallback={this.hoverExit} title="about" />
                    <HoverPageLink hoverEnterCallback={() => this.hoverEnter(1)} hoverExitCallback={this.hoverExit} title="experience" />
                    <HoverPageLink hoverEnterCallback={() => this.hoverEnter(2)} hoverExitCallback={this.hoverExit} title="crafts" />
                    <HoverPageLink hoverEnterCallback={() => this.hoverEnter(3)} hoverExitCallback={this.hoverExit} title="photography" />
                    <HoverPageLink hoverEnterCallback={() => this.hoverEnter(4)} hoverExitCallback={this.hoverExit} title="dance" />
                    <HoverPageLink hoverEnterCallback={() => this.hoverEnter(5)} hoverExitCallback={this.hoverExit} title="contact" />
                </div>
            </div>
        );
        return (
            <Router>
                <Route render={({location}) => (
                    <div>
                        <SideNavigation />
                        <div id="main">
                            <TransitionGroup>
                                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                                    <Switch location={location}>
                                        <Route exact path="/" component={() => <WordSearch hoverIndex={this.state.hoverIndex}/>}/>
                                        <Route path="/about" component={About}/>
                                        <Route path="/experience" component={Experience}/>
                                        <Route path="/crafts" component={Crafts}/>
                                        <Route path="/photography" component={Photography}/>
                                        <Route path="/dance" component={Dance}/>
                                        <Route path="/contact" component={Contact}/>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                )}/>
            </Router>
        );
    }
}

export default PageContainer;