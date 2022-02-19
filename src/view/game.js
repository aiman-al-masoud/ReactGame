import React, { Component } from 'react';
import Player from './player';
import Enemy from './enemy';


export default class Game extends Component {

    constructor(props) {
        super(props)
        this.player = React.createRef()
        this.enemy = React.createRef()
    }

    render() {
        return (<div>
            <Enemy ref={this.enemy} id="enemy" />
            <Player ref={this.player} id="player" />
        </div>)
    }


    /**
     * Called once, when this component is first mounted to the page. 
     * Adds a key listener for the commands, and starts the event loop.
     */
    componentDidMount() {

        window.addEventListener("keydown", (e) => {

            switch (e.code) {
                case "ArrowRight":
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

        // main event loop
        setInterval(this.eventLoopIteration, 100)
    }
    

    eventLoopIteration = ()=>{
        this.enemy.current.moveX(-10)
    }


}







