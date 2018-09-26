import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
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

const Main = () => (
    <div id="main">
        <Route exact path="/" component={WordSearch}/>
        <Route path="/about" component={About}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/crafts" component={Crafts}/>
        <Route path="/photography" component={Photography}/>
        <Route path="/dance" component={Dance}/>
        <Route path="/contact" component={Contact}/>
    </div>
);

const PageContainer = () => (
    <Router>
        <div>
            <SideNavigation />
            <Main />
        </div>
    </Router>
);

export default PageContainer;