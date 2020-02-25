import React from 'react';
import LifeHeart from '../images/liveHeart.png';

const Scoreboard = () => {
    return (
        <div id="scoreboard" className="section">
            <ol>
                <li className="tries"><img src={LifeHeart} alt="Heart Icon" height="35" width="30"/></li>
                <li className="tries"><img src={LifeHeart} alt="Heart Icon" height="35" width="30"/></li> 
                <li className="tries"><img src={LifeHeart} alt="Heart Icon" height="35" width="30"/></li>
                <li className="tries"><img src={LifeHeart} alt="Heart Icon" height="35" width="30"/></li>
                <li className="tries"><img src={LifeHeart} alt="Heart Icon" height="35" width="30"/></li>
			</ol>
		</div>
    )
}

export default Scoreboard;
