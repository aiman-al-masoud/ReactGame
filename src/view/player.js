import React, {Component} from "react"
import Icon from "../res/stoopid_choppy.gif"

export default class Player extends Component{

    constructor(props){
        super(props);

        this.state = {
            xCoord : 0,
            yCoord : 0 
        }

    }

    render(){
        return <img src={Icon} style={{position:"absolute", top: this.state.yCoord, left : this.state.xCoord, width:"200px"}}/>
    }

    moveX(step){
        this.setState({xCoord: this.state.xCoord+step})
    }

    moveY(step){
        this.setState({yCoord: this.state.yCoord+step})
    }


}



