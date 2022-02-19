import React, { Component } from "react"
import Icon from "../res/missile.png"

export default class Enemy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xCoord: 1000,
            yCoord: 0
        }

    }

    render() {
        return <img src={Icon} style={{ position: "absolute", top: this.state.yCoord, left: this.state.xCoord, width: "40px" }} />
    }

    moveX(step) {
        this.setState({ xCoord: this.state.xCoord + step })
    }

    // moveY(step){
    //     this.setState({yCoord: this.state.yCoord+step})
    // }




}



