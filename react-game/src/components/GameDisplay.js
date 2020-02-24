import React, { Fragment } from 'react';
import Overlay from './Overlay.js';
import Banner from './Banner.js';
import Phrase from './Phrase.js';
import Keyboard from './Keyboard.js';
import Scoreboard from './Scoreboard.js';

const GameDisplay = () => {
    return (
        <Fragment>
            <Overlay />
            <Banner />
            <Phrase />
            <Keyboard />
            <Scoreboard />
        </Fragment> 
    )
}

export default GameDisplay;
