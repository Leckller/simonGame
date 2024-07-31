import { useEffect, useRef, useState } from 'react';
import useSimon, { Colors } from '../hooks/useSimon';
import blueSound from '../sounds/blue.mp3';
import Main from '../components/Main';
import Header from '../components/Header';

function Home() {
  const [sequence, handlePlayerClick, pointsRef, handleStartGame] = useSimon();
  const [shine, setShine] = useState<Colors>();
  const [disabled, setDisabled] = useState(false);
  const seqRef = useRef(0);

  useEffect(() => {
    // Lógica para mostrar a sequencia atual
    setDisabled(true);
    const id = setInterval(() => {
      setShine(undefined);
      if (seqRef.current >= sequence.length) {
        setShine(undefined);
        seqRef.current = 0;
        setDisabled(false);
        return clearInterval(id);
      }
      setShine(sequence[seqRef.current]);
      const audio = new Audio(blueSound);
      audio.volume = 0.1;
      audio.play();
      seqRef.current++;
    }, 500);
    return () => clearInterval(id);
  }, [sequence]);

  return (
    <div
      className="flex flex-col justify-between items-center overflow-hidden
    w-screen h-screen bg-[#252a54] text-[#d7e0ff]"
    >
      <Header
        handleStartGame={ handleStartGame }
        sequence={ sequence }
        pointsRef={ pointsRef }
      />
      <Main
        handlePlayerClick={ handlePlayerClick }
        sequence={ sequence }
        shine={ shine }
        disabled={ disabled }
      />
      <footer>
        Created by Ruy
      </footer>
    </div>
  );
}

export default Home;
