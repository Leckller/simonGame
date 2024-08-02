import { useContext } from 'react';
import ContextGame from '../Context/ContextGame';

function Header() {
  const { game: { sequence, points, handleStartGame, setWin },
    config: { setConfig } } = useContext(ContextGame);
  return (
    <header
      className="h-[30%] w-screen justify-center items-center
     text-xl font-semibold flex flex-col gap-5 pt-4"
    >
      <h1 className="text-3xl">
        Simon Game
      </h1>
      <p>{`Maior pontuação ${points}`}</p>
      {sequence.length === 0 && (
        <div className="w-[300px] flex flex-row gap-5">
          <button
            className="p-1 rounded-3xl w-[50%] border-2
          border-[#151932] text-[#151932] bg-[#ff6e72]"
            onClick={ () => {
              handleStartGame();
              setWin(true);
            } }
          >
            Start
          </button>
          <button
            className="p-1 rounded-3xl w-[50%] border-2
          border-[#d7e0ff] bg-[#151932]"
            onClick={ () => setConfig(true) }
          >
            Config
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
