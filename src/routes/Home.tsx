import { useEffect, useRef, useState } from 'react';
import useSimon, { Colors } from '../hooks/useSimon';

function Home() {
  const [sequence, handlePlayerClick, pointsRef, handleStartGame] = useSimon();
  const [shine, setShine] = useState<Colors>();
  const seqRef = useRef(0);
  const brightness = 'brightness-200 animate-bounce';

  useEffect(() => {
    const id = setInterval(() => {
      setShine(undefined);
      if (seqRef.current >= sequence.length) {
        setShine(undefined);
        seqRef.current = 0;
        return clearInterval(id);
      }
      setShine(sequence[seqRef.current]);
      seqRef.current++;
    }, 600);
    return () => clearInterval(id);
  }, [sequence]);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <header>
        <h1>
          Simon Game
        </h1>
        <p>{`Maior pontuação ${pointsRef.current}`}</p>
        {sequence.length === 0 && (
          <button onClick={ () => handleStartGame() }>Start</button>
        )}
      </header>
      <main className="p-5">
        <section className="grid grid-cols-2 grid-rows-2 gap-10 w-[380px]">
          <button
            className={ `${shine === 'green' ? brightness : ''} 
            bg-green-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('green'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
          <button
            className={ `${shine === 'red' ? brightness : ''} 
            bg-red-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('red'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
          <button
            className={ `${shine === 'yellow' ? brightness : ''} 
            bg-yellow-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('yellow'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
          <button
            className={ `${shine === 'blue' ? brightness : ''} 
            bg-blue-500 transition-all size-40 border-8 rounded-[30px] border-black
            disabled:cursor-no-drop
            ` }
            disabled={ sequence.length === 0 }
            onClick={ () => { handlePlayerClick('blue'); } }
          >
            <span className="invisible absolute">.</span>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
