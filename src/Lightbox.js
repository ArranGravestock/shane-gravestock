import React, { Component } from 'react';
import './Lightbox.css';

class Lightbox extends Component {
    render() {
        return (
            <div className="lightbox-container">
                <div className="lightbox">
                    <NextItem/>
                    <PrevItem/>
                    <CloseLightbox/>
                    <h2>A Willy's Adventure</h2>
                    <iframe src="https://www.youtube.com/embed/-RZ86OB9hw4">
                    </iframe>
                    <div className="description">
                        <p>Some description to test this with describing what ever you wanted to describe because you're a monkey</p>
                        <p>It has multi-paragraph formatting because you're a f00king weeb</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                        <p>I have no idea whathappens when this exceeds the content</p>
                    </div>
                </div>
            </div>
        )
    }
}

class NextItem extends Component {
    render() {
        return (
            <div className="next-item"></div>
        )
    }
}

class PrevItem extends Component {
    render() {
        return (
            <div className="prev-item"></div>
        )
    }
}

class CloseLightbox extends Component {
    render() {
        return (
            <div className="close-lightbox"></div>
        )
    }
}
export default Lightbox;