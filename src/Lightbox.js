import React, { Component } from 'react';
import './Lightbox.css';
class Lightbox extends Component {

    close = (func) => {
        func(null)
    }
    
    render() {
        //onClick={() => {this.close(this.props.func)}}
        console.log(this.props.video_url)
        return (
            <div className="lightbox-container" >
                <NextItem pos={this.props.item.count} func={this.props.func}/>
                <PrevItem pos={this.props.item.count} func={this.props.func}/>
                <div className="lightbox">
                    <CloseLightbox func={this.props.func}/>
                    <h2>{this.props.item.title}</h2>
                    <div className="content">
                        <iframe src={this.props.item.video_url}>
                        </iframe>
                        <div className="description">
                            {this.props.item.desc}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class NextItem extends Component {

    nextItem = (pos, func) => {
        func(pos+1)
    }

    render() {
        return (
            
            <div className="next-item" onClick={() => {this.nextItem(this.props.pos, this.props.func)}}></div>
        )
    }
}

class PrevItem extends Component {

    prevItem = (pos, func) => {
        func(pos-1)
    }

    render() {
        return (
            <div className="prev-item" onClick={() => {this.prevItem(this.props.pos, this.props.func)}}></div>
        )
    }
}

class CloseLightbox extends Component {

    close = (func) => {
        func(null)
    }

    render() {
        return (
            <div className="close-lightbox" onClick={() => {this.close(this.props.func)}}></div>
        )
    }
}
export default Lightbox;
