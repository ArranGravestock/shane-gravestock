import React, { Component } from 'react';
import './Nav.css';
import {Lightbox} from './Lightbox'

class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <h1>Shane Gravestock</h1>
                <ul className="menu-items">
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Showreel</a></li>
                    <li><a href="#">Profile & Services</a></li>
                    <li><a href="#">Contact</a></li>
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