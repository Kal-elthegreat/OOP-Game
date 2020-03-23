import React, { Fragment } from 'react';
import Overlay from './Overlay';
import Banner from './Banner';
import Phrase from './Phrase';
import Keyboard from './Keyboard';
import Scoreboard from './Scoreboard';

const GameDisplay = () => {
    
    const handleKey = (e) => {
        if(e.target.className === 'key'){
            let keyVal = e.target;
            checkLetter(keyVal);
        }         
    }

    const checkLetter = (button) => {
        var listedPhrase = document.getElementsByClassName('letter');
        if(button !== undefined) {
            [...listedPhrase].map(letter => {
                if (letter.innerHTML === button.innerHTML) {
                    letter.className = 'show';
                    button.className = 'chosen';
                    button.disabled = true;
                }
            })
        }
    }

    return (
        <Fragment>
            <Overlay />
            <Banner />
            <Phrase />
            <Keyboard handleKey={handleKey} onClick={checkLetter}/>
            <Scoreboard />
        </Fragment> 
    )
}

export default GameDisplay;
