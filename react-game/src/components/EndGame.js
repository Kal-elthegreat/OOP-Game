import React from "react";

const EndGame = (props) => {
  console.log(props);
  if (props.gameWon) {
    return (
      <div id="overlay" className="win">
        <h1 id="game-over-message">WINNER WINNER CHICKEN DINNER</h1>
      </div>
    );
  }
  if (props.lives === 0) {
    return (
      <div id="overlay" className="lose">
        <h1 id="game-over-message">YOU LOSE SUCKA</h1>
      </div>
    );
  }
};

export default EndGame;
