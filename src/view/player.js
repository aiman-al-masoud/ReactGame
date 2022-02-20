import React, {Component} from "react"
import Icon from "../res/stoopid_choppy.gif"
import ExplosionImg from "../res/explosion.gif"


export default class Player extends Component{

    constructor(props){
        super(props);

        this.state = {
            xCoord : 200,
            yCoord : 0,
            movable : true,
            icon : Icon,
            visible : true
        }

    }

    render(){
        return <img src={this.state.icon} style={{position:"absolute", top: this.state.yCoord, left : this.state.xCoord, width:"200px", visibility : this.state.visible? "visible" : "hidden" }}/>
    }

    moveX(step){
        this.state.movable? this.setState({xCoord: this.state.xCoord+step}) : ""
    }

    moveY(step){
        this.state.movable? this.setState({yCoord: this.state.yCoord+step}) : ""
    }

    collide(collidable){
        
        let othersX = collidable.state.xCoord
        let othersY = collidable.state.yCoord

        if ( Math.abs(this.state.xCoord - othersX) > 60 ){
            return false
        }

        if ( Math.abs(this.state.yCoord - othersY) > 60 ){
            return false
        }

        return true
    }

    explode(){
        this.setState({movable : false, icon : ExplosionImg})
        setTimeout(()=>{this.setState({visible : false})}, 800)
    }



}



