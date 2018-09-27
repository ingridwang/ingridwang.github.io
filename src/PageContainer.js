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

const SideNavigation = () => (
    <div id="sidenav">
        <NavLink to="/" className="home-page-link">INGRID WANG</NavLink>
        <div id="pages">
            <NavLink to="/about" className="page-link">about</NavLink>
            <NavLink to="/experience" className="page-link">experience</NavLink>
            <NavLink to="/crafts" className="page-link">crafts</NavLink>
            <NavLink to="/photography" className="page-link">photography</NavLink>
            <NavLink to="/dance" className="page-link">dance</NavLink>
            <NavLink to="/contact" className="page-link">contact</NavLink>
        </div>
    </div>
);

const PageContainer = () => (
    <Router>
        <Route render={({location}) => (
            <div>
                <SideNavigation />
                <div id="main">
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={500}>
                            <Switch location={location}>
                                <Route exact path="/" component={WordSearch}/>
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

export default PageContainer;