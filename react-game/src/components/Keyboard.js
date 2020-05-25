import React from 'react';


const Keyboard = (props) => {

    return (
        <div id="qwerty" className="section">
            <div className="keyrow" onClick={props.handleKey}>
                <button className="key">q</button>
                <button className="key">w</button>
                <button className="key">e</button>
                <button className="key">r</button>
                <button className="key">t</button>
                <button className="key">y</button>
                <button className="key">u</button>
                <button className="key">i</button>
                <button className="key">o</button>
                <button className="key">p</button>
            </div>

            <div className="keyrow" onClick={props.handleKey}>
                <button className="key">a</button>
                <button className="key">s</button>
                <button className="key">d</button>
                <button className="key">f</button>
                <button className="key">g</button>
                <button className="key">h</button>
                <button className="key">j</button>
                <button className="key">k</button>
                <button className="key">l</button>
            </div>

            <div className="keyrow" onClick={props.handleKey}>
                <button className="key">z</button>
                <button className="key">x</button>
                <button className="key">c</button>
                <button className="key">v</button>
                <button className="key">b</button>
                <button className="key">n</button>
                <button className="key">m</button>
            </div>
        </div>
    )
}

export default Keyboard;
