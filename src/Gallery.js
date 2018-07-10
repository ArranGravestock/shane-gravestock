import React, { Component } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox'

const galleryItems = [
    {
        id: "-RZ86OB9hw4",
        title: "Some title",
        desc: "some description",
        image_src: "/gallery/48-Hour-Sci-Fi.jpg",
        video_url: ""
    }, 
    {
        id: "9V6k5POdwhI",
        title: "another title",
        desc: "another description",
        image_src: "/gallery/48-Hour-Sci-Fi.jpg",
        video_url: ""
    },
    {
        id: "g9UEOww8LCk",
        title: "another title",
        desc: "another description",
        image_src: "/gallery/48-Hour-Sci-Fi.jpg",
        video_url: ""
    },
    {
        id: "TiPQEY_EPpA",
        title: "another title",
        desc: "another description",
        image_src: "/gallery/48-Hour-Sci-Fi.jpg",
        video_url: ""
    },
    {
        id: "628698431",
        title: "another title",
        desc: "another description",
        image_src: "/gallery/48-Hour-Sci-Fi.jpg",
        video_url: ""
    },
    {
        id: "557316843",
        title: "another title",
        desc: "another description",
        image_src: "/gallery/48-Hour-Sci-Fi.jpg",
        video_url: ""
    },
]

class Gallery extends Component {

    state = {
        currentActive: null
    }

    setLightbox = (pos) => {
        if ((pos && pos < galleryItems.length && pos > 0) || pos === 0) {
            let newObj = galleryItems[pos]
            newObj.count = pos
            this.setState({currentActive: newObj})
        } else {
            this.setState({currentActive: null})
        }
        
    }

    render() {
        const GalleryImages = galleryItems.map((image, index) => {
            return <Image className="gallery-item" key={index} title={image.title} desc={image.text} id={image.id} image_src={image.image_src} video_url={image.video_url} onClick={() => this.setLightbox(index)}/>
            
        })
        
        return (
            <div className="container">
                <ul className="gallery-container">{GalleryImages}</ul>
                {this.state.currentActive ? <Lightbox item={this.state.currentActive} func={this.setLightbox}/> : ''}
            </div>
        )
    }
}

class Image extends Component {
    render() {

        const {className, title, onClick, image_src } = this.props;

        return (
            <li className={className}>
                <img src={image_src} alt={title} onClick={onClick}/>
            </li>
        )
    }
}


export {Gallery, galleryItems};