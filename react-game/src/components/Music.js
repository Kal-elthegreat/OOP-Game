import React , {useState} from "react";
import Sound from "react-sound";
import meek from "../meek.mp3";

const Music = ()=> {
    const startSong = Sound.status.PLAYING;
    const stopSong = Sound.status.PAUSED;
    const [shouldPlay, setShouldPlay] = useState(true);
    const [isPlaying,setIsPlaying] = useState(startSong)
    const handleMusic = () => {
       shouldPlay ? setIsPlaying(stopSong): setIsPlaying(startSong);
       shouldPlay ? setShouldPlay(false) : setShouldPlay(true);
    }
return (
  <div className="audio">
    <button onClick = {handleMusic} >
      Music
      <Sound url={meek} playStatus={isPlaying} autoLoad={true} volume={5} />
    </button>
  </div>
);}

export default Music;

