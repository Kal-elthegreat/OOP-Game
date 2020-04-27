import React from 'react';

const StartGame = () => {
    const start = () => {
        let display = document.getElementById('overlay');
        display.style.display = 'none';
    }
    return (
        <div id="overlay" className="start">
            <h2 className="title">Phrase Hunter</h2>
            <button 
            id="btn__reset"
            onClick = {start}>Start Game</button>
           
        </div>
    );  
}

export default StartGame;
