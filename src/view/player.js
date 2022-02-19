import React, {Component} from "react"
import Icon from "../res/stoopid_choppy.gif"

export default class Player extends Component{

    constructor(props){
        super(props);

        this.state = {
            xCoord : 0,
            yCoord : 0,
            movable : true
        }

    }

    render(){
        return <img src={Icon} style={{position:"absolute", top: this.state.yCoord, left : this.state.xCoord, width:"200px"}}/>
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

        console.log(othersX, othersY)

        
        if ( Math.abs(this.state.xCoord - othersX) > 60 ){
            return false
        }

        if ( Math.abs(this.state.yCoord - othersY) > 60 ){
            return false
        }

        return true

    }

    explode(){
        this.setState({movable : false})
    }


}



