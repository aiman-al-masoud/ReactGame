import React, { Component } from 'react';
import Player from './player';
import Enemy from './enemy';
import "../index.css"


export default class Game extends Component {

    constructor(props) {
        super(props)
        this.player = React.createRef()
        this.enemies = []
        this.spawnEnemies()
    }

    spawnEnemies() {
        for (let i = 0; i < 5; i++) {
            let newRef = React.createRef()
            this.enemies.push(newRef)
            this.forceUpdate()
        }
    }

    render() {
        return (<div>
            {this.enemies.map((ref) => { return <Enemy ref={ref} yCoord={parseInt(window.outerHeight * Math.random())} /> })}
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
                case "Enter":
                    this.spawnEnemies()
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

        // remove enemies that go off-screen
        this.enemies = this.enemies.filter((e) => { return !e.current.isOffScreen() })

        // nudge enemies forward
        this.enemies.forEach((e) => { e.current.moveX(-40) })

        // check player's collision with enemies
        if (this.enemies.some((e) => { return this.player.current.collide(e.current) })) {
            console.log("Boom! Game Over... :(")
            this.player.current.explode()
            clearInterval(this.eventLoopId)
        }

        //spawn a new wave of enemies if none's left
        if (this.enemies.length == 0) {
            this.spawnEnemies()
        }

    }


}







