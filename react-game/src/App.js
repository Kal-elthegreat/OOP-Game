import React from 'react';
import './App.css';

import StartGame from './components/StartGame';
import Banner from './components/Banner';
import Phrase from './components/Phrase';
import GameLogic from './components/GameLogic';
import Music from './components/Music';

function App() {
  return (
    <div className="main-container">
      <StartGame />
      <Banner />
      <Phrase />
      <GameLogic />
      <Music />
    </div>
  );
}

export default App;
