import React, { Component } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox'

const galleryItems = [
    {
        title: "Some title",
        desc: "some description",
        image_src: "./gallery/48-Hour-Sci-Fi.jpg",
        video_url: "https://player.vimeo.com/video/212563122"
    }, 
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/BASHH.jpg",
        video_url: "https://www.youtube.com/embed/3K_wMpiz2qE"
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/Exam-Stress.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/Fukui_Looping.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/IM-Cycling.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/IM-DontQuitDoIt.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/IP-Animation.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/IP-Meet-The-Team.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/Lidl.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/Logo-Reveal.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/MT-Wolf-Soteria.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/Stonegate.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/ThePlaylistMattEdmondson.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/UK Power Networks_Short.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/UKPowerNetworksRadioAd.jpg",
        video_url: ""
    },
    {
        title: "another title",
        desc: "another description",
        image_src: "./gallery/Xbox Ad Re-Design.jpg",
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
            return <Image className="gallery-item" key={index} title={image.title} desc={image.text} image_src={image.image_src} video_url={image.video_url} onClick={() => this.setLightbox(index)}/>
            
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
                <img src={require(image_src)} alt={title} onClick={onClick}/>
            </li>
        )
    }
}


export {Gallery, galleryItems};