import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <h1>Shane Gravestock</h1>
                <ul className="menu-items">
                    <li>Portfolio</li>
                    <li>Showreel</li>
                    <li>Profile/services</li>
                    <li>Contact</li>
                </ul>
                <ul className="social">
                    <li className="instagram"></li>
                    <li className="linkedin"></li>
                    <li className="twitter"></li>
                </ul>
            </div>
        );
    }
}

export default Nav;