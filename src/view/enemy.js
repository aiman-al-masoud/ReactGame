import React, { Component } from "react"
import Icon from "../res/missile.png"
import ExplosionImg from "../res/explosion.gif"
import ExplosionSound from "../res/explosion.wav"


export default class Enemy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xCoord: props.xCoord??1000,
            yCoord: props.yCoord??0,
            icon : Icon,
            visible : true,
            movable : true
        }

    }

    render() {
        return <img src={this.state.icon} style={{ position: "absolute", top: this.state.yCoord, left: this.state.xCoord, width: "40px", visibility : this.state.visible? "visible" : "hidden" }} />
    }

    moveX(step) {
        this.setState({ xCoord: this.state.xCoord + step })
    }

    isOffScreen(){
        return (this.state.xCoord + 40 ) < 0
    }

    explode(){
        this.setState({movable : false, icon : ExplosionImg})
        
        let audio = document.createElement("audio")
        audio.src = ExplosionSound

        audio.play()
        audio.volume = 0.2

        setTimeout(()=>{this.setState({visible : false})}, 800)
    }


}



