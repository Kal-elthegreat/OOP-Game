import React, { Fragment } from 'react';
import Overlay from './Overlay';
import Banner from './Banner';
import Phrase from './Phrase';
import Keyboard from './Keyboard';
import Scoreboard from './Scoreboard';

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
