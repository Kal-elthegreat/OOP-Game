import React from 'react';

const Overlay = () => {
    const startGame = () => {
        let display = document.getElementById('overlay');
        display.style.display = 'none';
    }
    return (
        <div id="overlay" className="start">
            <h2 className="title">Phrase Hunter</h2>
            {/* <h1 id="game-over-message"></h1> */}
            <button 
            id="btn__reset"
            onClick = {startGame}>Start Game</button>
        </div>
    );  
}

export default Overlay;
