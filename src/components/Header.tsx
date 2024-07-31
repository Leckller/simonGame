import { MutableRefObject } from 'react';
import { Colors } from '../hooks/useSimon';

function Header({ pointsRef, sequence, handleStartGame }: {
  pointsRef: MutableRefObject<number>,
  sequence: Colors[],
  handleStartGame: () => void
}) {
  return (
    <header className="h-[30%] text-xl font-semibold flex flex-col gap-5 pt-4">
      <h1 className="text-3xl">
        Simon Game
      </h1>
      <p>{`Maior pontuação ${pointsRef.current}`}</p>
      {sequence.length === 0 && (
        <button
          className="p-1 rounded-3xl border-2
          border-[#151932] text-[##151932] bg-[#ff6e72]"
          onClick={ () => handleStartGame() }
        >
          Start
        </button>
      )}
    </header>
  );
}

export default Header;
