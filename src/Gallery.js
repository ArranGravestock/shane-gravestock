import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            gallery: [
                {
                    id: "-RZ86OB9hw4",
                    title: "Some title",
                    desc: "some description",
                    type: "youtube",
                }, 
                {
                    id: "9V6k5POdwhI",
                    title: "another title",
                    desc: "another description",
                    type: "youtube",
                },
                {
                    id: "g9UEOww8LCk",
                    title: "another title",
                    desc: "another description",
                    type: "youtube",
                },
                {
                    id: "TiPQEY_EPpA",
                    title: "another title",
                    desc: "another description",
                    type: "youtube",
                },
                {
                    id: "628698431",
                    title: "another title",
                    desc: "another description",
                    type: "vimeo",
                },
                {
                    id: "557316843",
                    title: "another title",
                    desc: "another description",
                    type: "vimeo",
                },
            ]
        }
    }

    render() {

        const GalleryImages = this.state.gallery.map((image) => {
            return <Image className="gallery-item" key={image.id} title={image.title} desc={image.text} id={image.id} type={image.type}/>
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

        const { id, className, title, type } = this.props;
        if (type === "youtube") {
            return (
                <li className={className}>
                    <img src={`https://i1.ytimg.com/vi/${id}/maxresdefault.jpg`} alt={title}/>
                </li>
            )
        } else if (type === "vimeo") {
            return (
                <li className={className}>
                    <img src={`https://i.vimeocdn.com/video/${id}`} alt={title}/>
                </li>
            )
        }
    }
}


export default Gallery;