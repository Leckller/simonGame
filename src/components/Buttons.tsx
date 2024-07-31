import { Colors } from '../hooks/useSimon';

function Buttons(
  { shine, sequence, handlePlayerClick, bg, disabled }:
  { shine: Colors | undefined, sequence: Colors[], handlePlayerClick: (p: Colors) => void,
    bg: string, disabled: boolean },
) {
  const brightness = 'brightness-200 scale-105';
  return (
    <button
      className={ `${shine === bg.split('-')[1] ? brightness : ''} 
    ${bg} transition-all size-40 border-8 rounded-[30px] border-black
    disabled:cursor-no-drop hover:scale-105
    ` }
      disabled={ sequence.length === 0 || disabled }
      onClick={ () => { handlePlayerClick(bg.split('-')[1] as Colors); } }
    >
      <span className="invisible absolute">.</span>
    </button>
  );
}

export default Buttons;
