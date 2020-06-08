import React from 'react';
import './App.css';

import StartGame from './components/StartGame';
import Banner from './components/Banner';
import Phrase from './components/Phrase';
import GameLogic from './components/GameLogic';
// import Music from './components/Music'; not working properly 

function App() {
  return (
    <div className="main-container">
      <StartGame />
      <Banner />
      <Phrase />
      <GameLogic />
    </div>
  );
}

export default App;
