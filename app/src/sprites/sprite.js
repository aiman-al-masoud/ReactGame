import React, { Component } from "react"
// import DefaultImage from "../res/stoopid_choppy.gif"


/**
 * A Sprite is the basic graphical building block of any 2D game.
 */
export default class Sprite extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xCoord: props.xCoord??0,
            yCoord: props.yCoord??0,
            movable: props.movable??true,
            visible: props.visible??true,
            icon: props.icon,
            width: props.width??"200px"
        }
    }


    render() {
        return <img src={this.state.icon} style={{ position: "absolute", top: this.state.yCoord, left: this.state.xCoord, width: this.state.width, visibility: this.state.visible ? "visible" : "hidden" }} />
    }

    moveX(step) {
        this.state.movable ? this.setState({ xCoord: this.state.xCoord + step }) : ""
    }

    moveY(step) {
        this.state.movable ? this.setState({ yCoord: this.state.yCoord + step }) : ""
    }


    //TODO: fix magic numbers
    collide(collidable) {

        if (Math.abs(this.state.xCoord - collidable.state.xCoord) > 60) {
            return false
        }

        if (Math.abs(this.state.yCoord - collidable.state.yCoord) > 60) {
            return false
        }

        return true
    }

    hide() {
        this.setState({ visible: false })
    }

    show(){
        this.setState({ visible: true })
    }

    freeze(){
        this.setState({movable: false})
    }

    unFreeze(){
        this.setState({movable:true})
    }
    
    //TODO: fix magic number
    isOffScreen(){
        return (this.state.xCoord + 40 ) < 0
    }

}



