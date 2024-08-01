import { useContext, useEffect, useRef } from 'react';
import Song from '../utils/Song';
import ContextGame from '../Context/ContextGame';
import { Header, Main } from '../components';
import Config from '../components/Config';

function Home() {
  const seqRef = useRef(0);
  const {
    shine: { setShine }, disabled: { setDisabled },
    difficulty: { difficulty }, game: { sequence },
    config: { config }, volume: { volume },
  } = useContext(ContextGame);

  // Lógica para mostrar a sequencia atual
  useEffect(() => {
    setDisabled(true);

    setTimeout(() => {
      const id = setInterval(() => {
        setShine(undefined);
        if (seqRef.current >= sequence.length) {
          setShine(undefined);
          seqRef.current = 0;
          setDisabled(false);
          return clearInterval(id);
        }
        setShine(sequence[seqRef.current]);
        const song = Song(sequence[seqRef.current]);
        const audio = new Audio(song);
        audio.volume = volume;
        audio.play();
        seqRef.current++;
      }, difficulty);
      return () => clearInterval(id);
    }, 500);
  }, [sequence]);

  return (
    <div
      className="flex flex-col justify-center items-center overflow-hidden
    w-screen h-screen bg-[#252a54] text-[#d7e0ff]"
    >
      {config && (
        <Config />
      )}
      <Header />
      <Main />
      <footer>
        Created by Ruy
      </footer>
    </div>
  );
}

export default Home;
