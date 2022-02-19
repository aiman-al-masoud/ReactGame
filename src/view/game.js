import React, { Component } from 'react';
import Player from './player';
import Enemy from './enemy';


export default class Game extends Component {

    constructor(props) {
        super(props)
        this.player = React.createRef()
        this.enemies = []
    }

    makeEnemy() {
        let newRef = React.createRef()
        let yCoord = parseInt(window.outerHeight*Math.random())
        // let xCoord = parseInt(window.outerWidth*Math.random())
        
        this.enemies.push(newRef)
        return <Enemy ref={newRef} id="enemy" yCoord={yCoord} />
    }

    render() {
        return (<div>
            {this.makeEnemy()}
            {this.makeEnemy()}
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
        this.eventLoopId = setInterval(this.eventLoopIteration, 100)
    }

    /**
     * An iteration of the game's event loop.
     */
    eventLoopIteration = () => {

        for(let enemy of this.enemies){
            enemy.current.moveX(-10)
        }

        var boom;
        for(let enemy of this.enemies){
            if( boom = this.player.current.collide(enemy.current)){
                break
            }
        }

        boom ? console.log("boom! Game over... :(") : ""
        boom ? this.player.current.explode() : ""
        boom ? clearInterval(this.eventLoopId) : ""
    }


}







