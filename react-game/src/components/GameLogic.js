import React, { Fragment} from "react";
import { useState } from "react";
import Keyboard from "./Keyboard";
import Scoreboard from "./Scoreboard";
import EndGame from "./EndGame";

const GameLogic = () => {
//   let  gameWon = true;

  const [lives, setLives] = useState(5);
const [isWon ,setIsWon] = useState(false);

  const handleKey = (e) => {
    if (e.target.className === "key") {
      let keyVal = e.target;
      checkLetter(keyVal);
    }
  };

  const checkLetter = (button) => {
    var listedPhrase = document.getElementsByClassName("letter");
    let isMatch = false;
    if (button !== undefined) {
      [...listedPhrase].map((letter) => {
        if (letter.innerHTML === button.innerHTML) {
          letter.className = "show";
          isMatch = true;
        }
      });
      if (isMatch) {
        button.className = "chosen";
        if(!listedPhrase.length){
            setIsWon(!isWon)
        }
      } else {
        button.className = "wrong";
        setLives(lives - 1);
      }

      button.disabled = true;
    }
    console.log(isWon);
  };
  
  if (lives === 0 || isWon === true) {
    return (
      <Fragment>
        <EndGame lives={lives} gameWon={isWon} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Keyboard handleKey={handleKey} onClick={checkLetter} />
        <Scoreboard lives={lives} />
      </Fragment>
    );
  }
};

export default GameLogic;
