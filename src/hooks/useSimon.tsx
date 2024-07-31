/* eslint-disable no-alert */
import { MutableRefObject, useEffect, useRef, useState } from 'react';

export type Colors = 'red' | 'blue' | 'green' | 'yellow';
const colors: Colors[] = ['blue', 'green', 'red', 'yellow'];

function getRandomColor(): Colors {
  const randomColor = colors[Math.floor(Math.random() * (colors.length))];
  return randomColor;
}

function useSimon():
[Colors[], (color: Colors) => void, MutableRefObject<number>, () => void] {
  const [sequence, setSequence] = useState<Colors[]>([]);
  const [playerSequence, setPlayerSequence] = useState<Colors[]>([]);
  const pointsRef = useRef(0);
  function handleAddSequence() {
    setPlayerSequence([]);
    const color = getRandomColor();
    setSequence([...sequence, color]);
  }

  function handleStartGame() {
    handleAddSequence();
  }

  function reset() {
    setPlayerSequence([]);
    setSequence([]);
  }

  function handlePlayerClick(color: Colors) {
    setPlayerSequence((prev) => [...prev, color]);
  }

  useEffect(() => {
    const check = playerSequence.some((c, i) => c !== sequence[i]);
    if (check) {
      if (playerSequence.length > pointsRef.current) {
        pointsRef.current = sequence.length;
      }
      alert(`Você errou! sua pontuação foi de ${sequence.length}`);
      reset();
    } else if (playerSequence.length === sequence.length && sequence.length > 0) {
      alert('Acertou!');
      handleAddSequence();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerSequence]);

  return [sequence, handlePlayerClick, pointsRef, handleStartGame];
}

export default useSimon;
