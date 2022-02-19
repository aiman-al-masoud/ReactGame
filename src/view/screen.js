import React, { Component } from 'react';
import Player from './player';



export default class Game extends Component {

    constructor(props) {
        super(props)
        this.player = React.createRef()
    }

    render() {
        return (<div>
            <Player ref={this.player} id="player" />
        </div>)
    }


    /**
     * When this component gets mounted to the page, add a 
     * key listener for the commands.
     */
    componentDidMount() {

        window.addEventListener("keydown", (e) => {

            switch (e.code) {
                case "ArrowRight":
                    console.log(this.player.current)
                    this.player.current.moveX(10)
                    break;
                case "ArrowLeft":
                    this.player.current.moveX(-10)
                    break;
                case "ArrowUp":
                    this.player.current.moveY(-10)
                    break;
                case "ArrowDown":
                    this.player.current.moveY(10)
                    break;
            }

        })

    }


}







