import React, { Component } from 'react';
import Player from './player';
import Enemy from './enemy';
import Gameover from './gameover';
import "../index.css"

export default class Game extends Component {

    constructor(props) {
        super(props)

        this.state={
            wave : 0,
            highscore : localStorage.getItem("highscore")??0,
            gameover : false
        }
        

        this.player = React.createRef()
        this.enemies = []
        this.spawnEnemies()
        
    }

    spawnEnemies() {

        let NUM_ENEMIES = parseInt(5* (this.state.wave+1))
        
        for (let i = 0; i < NUM_ENEMIES; i++) {
            let newRef = React.createRef()
            this.enemies.push(newRef)
            this.forceUpdate()
        }

        this.setState({wave : this.state.wave+1})
    }

    render() {

        return (
        
        
        <div >
            <p className='score_box'>score: {this.state.wave} <br/> highscore: {this.state.highscore}</p>
            {this.enemies.map((ref) => { return <Enemy ref={ref} yCoord={parseInt(window.outerHeight * Math.random())} /> })}
            <Player ref={this.player}  />

            {this.state.gameover? <Gameover/> : ""}

        </div>
        
        )
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
                    this.player.current.state.visible? this.player.current.hide() : this.player.current.show()
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

        // nudge player downwards
        this.player.current.moveY(1)

        // check player's collision with enemies
        for(let enemy of this.enemies){
            if(this.player.current.collide(enemy.current)){
                enemy.current.explode()
                this.player.current.explode()
                localStorage.setItem("highscore", this.state.wave>this.state.highscore? this.state.wave :  this.state.highscore)
                this.setState({gameover : true})
                clearInterval(this.eventLoopId)
            }
        }

        //spawn a new wave of enemies if none's left
        if (this.enemies.length == 0) {
            this.spawnEnemies()
        }

    }


}







