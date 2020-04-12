import React, {Fragment} from 'react';
import { useState } from "react";
import Keyboard from './Keyboard';
import Scoreboard from './Scoreboard';


const GameDisplay = () => {

    ;const [lives, setLives] = useState(5);

    const handleKey = (e) => {
        if(e.target.className === 'key'){
            let keyVal = e.target;
            checkLetter(keyVal);
        }         
    }

    const checkLetter = (button) => {
        var listedPhrase = document.getElementsByClassName('letter');
        let isMatch = false;
        if(button !== undefined) {
            [...listedPhrase].map(letter => {
                if(letter.innerHTML === button.innerHTML){
                    letter.className = 'show';
                    isMatch = true;
                }
            })
            if(isMatch) {
                button.className = 'chosen';
            } else {
                button.className = 'wrong';
                setLives(lives - 1);
                // will need a func to check if lives has hit 0 to see if game lost
            }
            button.disabled = true;
        }
    }

    return (
        <Fragment>
            <Keyboard handleKey={handleKey} onClick={checkLetter}/>
            <Scoreboard lives = {lives}/>
        </Fragment> 
    )
}

export default GameDisplay;
