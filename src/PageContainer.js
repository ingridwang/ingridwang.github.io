import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
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
        <Link to="/">
            <div className="home-page-link">INGRID WANG</div>
        </Link>
        <div id="pages">
            <Link to="/about">
                <div className="page-link">about</div>
            </Link>
            <Link to="/experience">
                <div className="page-link">experience</div>
            </Link>
            <Link to="/crafts">
                <div className="page-link">crafts</div>
            </Link>
            <Link to="/photography">
                <div className="page-link">photography</div>
            </Link>
            <Link to="/dance">
                <div className="page-link">dance</div>
            </Link>
            <Link to="/contact">
                <div className="page-link">contact</div>
            </Link>
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