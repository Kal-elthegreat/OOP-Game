import React from 'react';
import PropTypes from 'prop-types';
import DisplayPhrase from './DisplayPhrase'


const Phrase = (props) => {
    
    return(
        <div id="phrase" className="section">
            <ul><DisplayPhrase randomPhrase={props.randomPhrase} /></ul>
        </div>
    )
}

Phrase.propTypes = {
    selectedKey: PropTypes.string
}

export default Phrase;
