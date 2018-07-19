import React, { Component } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox'

const galleryItems = [
    {
        title: "Some title",
        desc: "some description",
        image_src: "48-Hour-Sci-Fi.jpg",
        video_url: "https://player.vimeo.com/video/212563122",
        aspect_ratio: "2-39-1"
    }, 
    {
        title: "another title",
        desc: "another description",
        image_src: "BASHH.jpg",
        video_url: "https://www.youtube.com/embed/3K_wMpiz2qE",
        aspect_ratio: "16-9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "Exam-Stress.jpg",
        video_url: "",
        aspect_ratio: "16-9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "Fukui_Looping.jpg",
        video_url: "",
        aspect_ratio: "16-9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "IM-Cycling.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "IM-DontQuitDoIt.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "IP-Animation.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "IP-Meet-The-Team.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "Lidl.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "Logo-Reveal.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "MT-Wolf-Soteria.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "Stonegate.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "ThePlaylistMattEdmondson.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "UK Power Networks_Short.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "UKPowerNetworksRadioAd.jpg",
        video_url: "",
        aspect_ratio: "16:9"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "Xbox Ad Re-Design.jpg",
        video_url: "",
        aspect_ratio: "16:9"
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
            return <Image className={`gallery-item`} aspect_ratio={image.aspect_ratio} key={index} title={image.title} desc={image.text} image_src={image.image_src} video_url={image.video_url} onClick={() => this.setLightbox(index)}/>
            
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
            <li className={className} onClick={onClick}>
                <img src={require("./gallery/" + image_src)} alt={title}/>
                <span className="player-button">&#xf04b;</span>
            </li>
        )
    }
}


export {Gallery, galleryItems};