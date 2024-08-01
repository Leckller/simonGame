import { useContext } from 'react';
import { Colors } from '../Types/Colors';
import Song from '../utils/Song';
import ContextGame from '../Context/ContextGame';

function Buttons({ bg }:{ bg: string }) {
  const {
    game: { sequence, handlePlayerClick }, shine: { shine },
    disabled: { disabled }, volume: { volume },
  } = useContext(ContextGame);
  const brightness = 'brightness-200 scale-105';
  return (
    <button
      className={ `${shine === bg.split('-')[1] ? brightness : ''} 
    ${bg} transition-all size-40 border-8 rounded-[30px] border-black
    disabled:cursor-no-drop hover:scale-105
    ` }
      disabled={ sequence.length === 0 || disabled }
      onClick={ () => {
        const song = Song(bg.split('-')[1] as Colors);
        const audio = new Audio(song);
        audio.volume = volume;
        audio.play();
        handlePlayerClick(bg.split('-')[1] as Colors);
      } }
    >
      <span className="invisible absolute">.</span>
    </button>
  );
}

export default Buttons;
