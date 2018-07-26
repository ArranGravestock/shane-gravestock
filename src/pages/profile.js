import React, { Component } from 'react';
import './gallery-grid.css'


let galleryItems = [
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://youtube.com"
    },
]

class Profile extends Component {
    render() {
        return (
            <div className="container-profile">
                <header>
                    <img alt="header-banner" src="https://via.placeholder.com/800x250" width="100%" height="auto"/>
                </header>
                <section>
                    <p>Hello there! I’m Shane Gravestock, based in Brighton and London. I’m available to hire as a freelance sound recordist, sound designer and sound mixer for corporate, commercial, short and feature films. Please get in touch using the contact page.</p>
                    <br/>
                    <p>I started off my journey by graduating with a 1st class in BSc (Hons) Music Technology. Half way through university I moved towards film sound and fell in love with every aspect of it. I started freelancing at university creating corporate videos and further honing my craft. From there I joined Instinctif Partners as a video and sound specialist and worked with countless companies such as Lidl, Virgin Active, and Stonegate Pubs. After working at Instinctif Partners for three years I started full time freelancing along with starting my own film production company called Straight Point Films.</p>
                </section>
                <footer className="company-grid">
                    {galleryItems.map((image, index) => {
                        return <GalleryItem src={require("../companies/" + image.src)} external_url={image.external_url}/>
                    })}
                </footer>
            </div>
        );
    }
}

class GalleryItem extends Component {
    render() {
        return (
            <div>
                <a href={this.props.external_url}  target="_blank" rel="noopener noreferrer"><img alt="company-logo" width="100%" src={this.props.src}/></a>
            </div>
        )
    }
}

export default Profile;