import React from 'react';
import PropTypes from 'prop-types';
import DisplayPhrase from './DisplayPhrase'


const Phrase = () => {
        var phrases = [{ name: 'prestige worldwide' }, { name: 'jack jack has powers' }, { name: 'javascript is life' }, { name: 'to infinity and beyond' }, { name: 'just keep swimming' }];
        var random = Math.floor(Math.random() * phrases.length);
        var getRandom = phrases[random].name;
    
    return(
        <div id="phrase" className="section">
            <ul><DisplayPhrase randomPhrase={getRandom} /></ul>
        </div>
    )
}

Phrase.propTypes = {
    selectedKey: PropTypes.string
}

export default Phrase;
