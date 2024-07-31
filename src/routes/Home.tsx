import { useEffect, useRef, useState } from 'react';
import useSimon, { Colors } from '../hooks/useSimon';
import blueSound from '../sounds/blue.mp3';

function Home() {
  const [sequence, handlePlayerClick, pointsRef, handleStartGame] = useSimon();
  const [shine, setShine] = useState<Colors>();
  const seqRef = useRef(0);
  const brightness = 'brightness-200 scale-105';

  useEffect(() => {
    const id = setInterval(() => {
      setShine(undefined);
      if (seqRef.current >= sequence.length) {
        setShine(undefined);
        seqRef.current = 0;
        return clearInterval(id);
      }
      setShine(sequence[seqRef.current]);
      const audio = new Audio(blueSound);
      audio.volume = 0.1;
      audio.play();
      seqRef.current++;
    }, 600);
    return () => clearInterval(id);
  }, [sequence]);

  return (
    <div
      className="flex flex-col justify-between items-center overflow-hidden
    w-screen h-screen"
    >
      <header className="h-[30%]">
        <h1>
          Simon Game
        </h1>
        <p>{`Maior pontuação ${pointsRef.current}`}</p>
        {sequence.length === 0 && (
          <button onClick={ () => handleStartGame() }>Start</button>
        )}
      </header>
      <main className="h-[70%]">
        <article className="grid grid-cols-2 gap-10">
          <button
            className={ `${shine === 'green' ? brightness : ''} 
            bg-green-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop hover:scale-105
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('green'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
          <button
            className={ `${shine === 'red' ? brightness : ''} 
            bg-red-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop hover:scale-105
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('red'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
          <button
            className={ `${shine === 'yellow' ? brightness : ''} 
            bg-yellow-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop hover:scale-105
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('yellow'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
          <button
            className={ `${shine === 'blue' ? brightness : ''} 
            bg-blue-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop hover:scale-105
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('blue'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
        </article>
      </main>
    </div>
  );
}

export default Home;
