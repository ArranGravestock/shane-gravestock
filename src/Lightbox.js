import React, { Component } from 'react';
import './Lightbox.css';
class Lightbox extends Component {

    close = (func) => {
        func(null)
    }
    
    render() {
        //onClick={() => {this.close(this.props.func)}}
        return (
            <div className="lightbox-container" >
                <div className="lightbox">
                    <NextItem pos={this.props.item.count} func={this.props.func}/>
                    <PrevItem pos={this.props.item.count} func={this.props.func}/>
                    <CloseLightbox func={this.props.func}/>
                    <h2>{this.props.item.title}</h2>
                    <iframe src={this.props.video_url}>
                    </iframe>
                    <div className="description">
                        {this.props.item.desc}
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
