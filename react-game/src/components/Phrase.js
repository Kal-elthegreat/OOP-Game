import React from 'react';
import PropTypes from 'prop-types';


const Phrase = () => {
    const phrase = RandomPhrase();
    return(
        <div id="phrase" className="section">
            <ul><DisplayPhrase phrase = {phrase}/></ul>
        </div>
    )
}

const DisplayPhrase = props => {
    console.log(props)
    const spread = [...props.phrase] // place phrase letters into individual arrays
    const listPhrase = spread.map((letter,index) =>  // creates li & adds letters to each one
        letter === ' ' ? <li key={index} className='hide space'>{letter}</li> : <li key={index} className='hide letter'>{letter}</li>
    );
    return (
        <ul>{listPhrase}</ul>
    )
}

const RandomPhrase = () => {
    var phrases = [{ name: 'prestige worldwide' }, { name: 'jack jack has powers' }, { name: 'javascript is life' }, { name: 'to infinity and beyond' }, { name: 'just keep swimming' }];
    var random = Math.floor(Math.random() * phrases.length);
    var getRandom = phrases[random].name;
    return (
        getRandom
    )
}

DisplayPhrase.propTypes = {
    phrase: PropTypes.string
};

export default Phrase;
