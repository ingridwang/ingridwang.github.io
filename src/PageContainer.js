import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
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

const HoverIndexNull = -1;
const PageNames = ["about", "experience", "crafts", "photography", "dance", "contact"];

class HoverPageLink extends React.Component {
    mouseEnter = () => {
        this.props.onHoverEnter(this.props.id);
    }
    mouseLeave = () => {
        this.props.onHoverExit(this.props.id);
    }
    render() {
        return (
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <NavLink 
                    to={"/" + this.props.title} 
                    className={"page-link" + (this.props.hoverActive ? " active" : "")}
                >
                    {this.props.title}
                </NavLink>
            </div>
        );
    }
}

class PageContainer extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            hoverIndex: HoverIndexNull
        }
    }

    hoverEnter = (index) => {
        this.setState({hoverIndex: index});
    }

    hoverExit = () => {
        this.setState({hoverIndex: HoverIndexNull});
    }

    render() {
        return (
            <Router>
                <Route render={({location}) => (
                    <div>
                        {/* side navigation */}
                        <div id="sidenav">
                            <NavLink to="/" className="home-page-link">INGRID WANG</NavLink>
                            <div id="pages">
                                {PageNames.map((pageName, id) => {
                                    return (
                                        <HoverPageLink 
                                            key={id}
                                            onHoverEnter={() => this.hoverEnter(id)} 
                                            onHoverExit={this.hoverExit} 
                                            hoverActive={this.state.hoverIndex === id && location.pathname === "/"} 
                                            title={pageName} />
                                    )
                                })}
                            </div>
                        </div>
                        {/* main */}
                        <div id="main">
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={{enter: 800, exit: 400}}
                                >
                                    <Switch location={location}>
                                        <Route exact path="/" component={() => 
                                            <WordSearch 
                                                onHoverEnter={this.hoverEnter}
                                                onHoverExit={this.hoverExit}
                                                hoverIndex={this.state.hoverIndex}/>
                                        }/>
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

export {HoverIndexNull, PageNames};
export default PageContainer;