import React from "react";
import "./SideNavigation.css";

class SideNavigation extends React.Component {
	render() {
		return (
			<div id="sidenav">
				<a href="../../index.html">INGRID WANG</a>
				<div id="pages">
					<button>about</button>
					<button>experience</button>
					<button>crafts</button>
					<button>photography</button>
					<button>dance</button>
					<button>contact</button>
				</div>
			</div>
		);
	}
}

export default SideNavigation;