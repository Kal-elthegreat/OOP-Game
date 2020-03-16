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
        keyVal = e.target.innerHTML;
        }
        chosenLetter(keyVal)
        
    }
    const chosenLetter = (val) => {
        if(val !== undefined) {
            [...selectedPhrase].map(letter => {
                if (letter === val) {
                // change the class to show 
                // make key unclickable - good
                } else {
                    //remove life
                    //make key unclickable- bad
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
