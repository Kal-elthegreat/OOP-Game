import React from 'react';
import PropTypes from 'prop-types';


const DisplayPhrase = props => {
    console.log(props)
    const listPhrase =
        [...props.randomPhrase]
            .map((letter, index) =>
                letter === ' ' ? <li key={index} className='hide space'>{letter}</li> : <li key={index} className='hide letter'>{letter}</li>
            );
    return (
        <ul>{listPhrase}</ul>
    )
}

DisplayPhrase.propTypes = {
    randomPhrase: PropTypes.string
};


export default DisplayPhrase;