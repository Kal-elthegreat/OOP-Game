import React from 'react';
import './App.css';

import Overlay from './components/Overlay';
import Banner from './components/Banner';
import Phrase from './components/Phrase';
import GameLogic from './components/GameLogic';

function App() {
  return (
    <div className="main-container">
      <Overlay/>
      <Banner/>
      <Phrase/>
      <GameLogic/>
    </div>  
  );
}

export default App;
