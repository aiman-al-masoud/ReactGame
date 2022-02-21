import React, { Component } from "react"

export default class Gameover extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="gameover">
                <h1>Game Over!</h1>
                <p>Ctrl + R (or Command + R) to play again.</p>
                <p>F11 for full-screen mode</p>
            </div>
        )
    }

}
