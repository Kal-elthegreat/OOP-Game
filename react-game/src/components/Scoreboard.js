import  React from 'react';
import { useState } from 'react';
import lifeHeart from '../images/liveHeart.png';
import lostHeart from '../images/lostHeart.png';


const Scoreboard = (props) => {
    let totalHearts = [];
    const heartImgs = {lifeHeart, lostHeart};
    const [alive, setAlive] = useState(heartImgs.lifeHeart); 
    
    const Heart = () => {
        return <li className="tries"><img src={alive} alt="Heart Icon" height="35" width="30" /></li>
    }
    const heartsArr = num =>{
        for(let i = 0; i < num; i++){
            totalHearts.push(<Heart key={i}/>);
        }
        return totalHearts;   
    }
    const showHearts = heartsArr(props.lives).map((heart) => {
      return heart;
    });
    return (
        <div id="scoreboard" className="section">
            <ol>
                {showHearts}
			</ol>
		</div>
    )
}

export default Scoreboard;
