import { useContext, useEffect, useRef, useState } from 'react';
import Song from '../utils/Song';
import ContextGame from '../Context/ContextGame';
import { Header, Main } from '../components';
import Config from '../components/Config';
import { Colors } from '../Types/Colors';
import winSound from '../sounds/741975__victor_natas__victory-sting-3.wav';
import loseSound from '../sounds/538151__fupicat__8bit-fall.wav';
import { colors } from '../utils/colors';

function Home() {
  const seqRef = useRef(0);
  const winRef = useRef(0);
  const {
    shine: { setShine }, disabled: { setDisabled },
    difficulty: { difficulty }, game: { sequence, win },
    config: { config }, volume: { volume },
  } = useContext(ContextGame);

  useEffect(() => {
    // Lógica para mostrar a sequencia atual
    setDisabled(true);
    seqRef.current = 0;
    winRef.current = 0;

    if (win) {
      const winSong = new Audio(winSound);
      winSong.volume = volume;
      winSong.play();
    }

    const idWin = setInterval(() => {
      // Lose
      if (seqRef.current >= sequence.length) {
        setShine(undefined);
        clearInterval(idWin);
        return;
      }
      // Win
      if (winRef.current > colors.length) {
        setShine(undefined);
        return;
      }
      setShine(undefined);
      setShine(colors[winRef.current]);
      winRef.current++;
    }, 150);

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
    }, 4200);

    return () => clearInterval(idWin);
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
