import React from 'react';
import PropTypes from 'prop-types';


const Phrase = () => {

    const randomPhrase = () => {
        var phrases = [{ name: 'prestige worldwide' }, { name: 'jack jack has powers' }, { name: 'javascript is life' }, { name: 'to infinity and beyond' }, { name: 'just keep swimming' }];
        var random = Math.floor(Math.random() * phrases.length);
        var getRandom = phrases[random].name;
        return (
            getRandom
        )
    }
    var selectedPhrase = randomPhrase();

    return(
        <div id="phrase" className="section">
            <ul><DisplayPhrase phrase = {selectedPhrase}/></ul>
        </div>
    )
}

const DisplayPhrase = props => {
    console.log(props)
    const listPhrase = 
    [...props.phrase]
        .map((letter,index) =>
            letter === ' ' ? <li key={index} className='hide space'>{letter}</li> : <li key={index} className='hide letter'>{letter}</li>
        );

    return (
        <ul>{listPhrase}</ul>
    )
}

DisplayPhrase.propTypes = {
    phrase: PropTypes.string
};

export default Phrase;
