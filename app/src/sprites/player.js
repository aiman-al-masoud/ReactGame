import Icon from "../../res/stoopid_choppy.gif"
import ExplosionImg from "../../res/explosion.gif"
import Sprite from "./sprite"


export default class Player extends Sprite{
    constructor(props){
        props.icon = Icon
        super(props)
    }

    explode(){
        this.freeze()
        this.setState({ icon : ExplosionImg})
        setTimeout(()=>{this.hide()}, 800)
    }

}
