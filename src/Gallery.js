import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            gallery: [
                {
                    id: 1,
                    src: "https://unsplash.it/1920/1080",
                    title: "Some title",
                    desc: "some description",
                }, 
                {
                    id: 2,
                    src: "https://unsplash.it/1920/1080",
                    title: "another title",
                    desc: "another description",
                },
                {
                    id: 3,
                    src: "https://unsplash.it/1920/1080",
                    title: "another title",
                    desc: "another description",
                },
                {
                    id: 4,
                    src: "https://unsplash.it/1920/1080",
                    title: "another title",
                    desc: "another description",
                },
            ]
        }
    }

    render() {

        const GalleryImages = this.state.gallery.map((image) => {
            return <Image className="gallery-item" key={image.id} src={image.src} title={image.title} desc={image.text}/>
        })
        
        return (
            <div className="container">
                <ul className="gallery-container">{GalleryImages}</ul>
            </div>
        )
    }
}

class Image extends Component {
    render() {

        const { className, src, title } = this.props;

        return (
            <li className={className}>
                <img src={src} alt={title}/>
            </li>
        )
    }
}


export default Gallery;