import React, { Component } from 'react';

class Showreel extends Component {
    render() {
        return (
            <div
            style={{
                padding: "1em 5% 0 5%"
            }}>
                <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
                <iframe src="https://player.vimeo.com/video/107805398" style={{
                position:"absolute",
                top:0,
                left:0,
                width:"100%",
                border: 0,
                height:"100%"}} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        );
    }
}

export default Showreel;