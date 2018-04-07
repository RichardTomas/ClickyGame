import React from "react";
import "./Navbar.css";

const Navbar = (props) => ( 
<div className="navbar navbar-fixed-top">	
    	<nav className="navbar">
    		<ul>
        		<li> <a href="/">Clicky Game</a> </li>
        		<li> {props.children} </li>
        		<li> Score: {props.score} | Top Score: {props.topScore} </li>
    		</ul>
		</nav>
</div>  		
);

export default Navbar;



