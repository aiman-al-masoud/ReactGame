import Icon from "../../res/missile.png"
import ExplosionImg from "../../res/explosion.gif"
import ExplosionSound from "../../res/explosion.wav"
import Sprite from "./sprite"


export default class Enemy extends Sprite {

    constructor(props){
        props.icon = Icon
        props.xCoord = 1000
        props.width = 60
        super(props);
    }

    explode(){
        this.freeze()
        this.setState({icon : ExplosionImg})
        let audio = new Audio(ExplosionSound)
        audio.volume = 0.2
        audio.play()
        setTimeout(()=>{this.hide()}, 800)
    }


}



