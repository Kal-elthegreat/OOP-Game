import React, { Fragment } from 'react';
import Overlay from './Overlay';
import Banner from './Banner';
import Phrase from './Phrase';
import Keyboard from './Keyboard';
import Scoreboard from './Scoreboard';

const GameDisplay = () => {
    let keyVal;

    const randomPhrase = () => {
        var phrases = [{ name: 'prestige worldwide' }, { name: 'jack jack has powers' }, { name: 'javascript is life' }, { name: 'to infinity and beyond' }, { name: 'just keep swimming' }];
        var random = Math.floor(Math.random() * phrases.length);
        var getRandom = phrases[random].name;
        return (
            getRandom
        )
    }
    var selectedPhrase = randomPhrase();

    const handleKey = (e) => {
        if(e.target.className === 'key'){
        keyVal = e.target;
        }
        chosenLetter(keyVal)
        
    }
    const listedPhrase = document.getElementsByClassName('letter');
    const chosenLetter = (val) => {
        if(val !== undefined) {
            [...listedPhrase].map(letter => {
                if (letter.innerHTML === val.innerHTML) {
                    letter.className = 'show';
                    //val.className = 'chosen' <- can't be done here because it shouldn't be in the loop
                } else {
                    //remove life
                    //val.className = 'wrong' <-- same applies
                }
            })
        }
    }

    return (
        <Fragment>
            <Overlay />
            <Banner />
            <Phrase randomPhrase={selectedPhrase}/>
            <Keyboard handleKey={handleKey} onClick={chosenLetter}/>
            <Scoreboard />
        </Fragment> 
    )
}

export default GameDisplay;
