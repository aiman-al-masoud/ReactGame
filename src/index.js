import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./view/game.js"
import BackgroundImage from "./res/bg.jpg"


document.body.style.backgroundImage = `url('${BackgroundImage}')`

ReactDOM.render(
    <Game/>
    , document.getElementById('root')
);


