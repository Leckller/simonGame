import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import wrongAudio from '../sounds/wrong.mp3';
import { Colors } from '../Types/Colors';

const colors: Colors[] = ['blue', 'green', 'red', 'yellow'];

function getRandomColor(): Colors {
  const randomColor = colors[Math.floor(Math.random() * (colors.length))];
  return randomColor;
}

function useSimon():
[Colors[], (color: Colors) => void, MutableRefObject<number>, () => void] {
  const [sequence, setSequence] = useState<Colors[]>([]);
  const [playerSequence, setPlayerSequence] = useState<Colors[]>([]);
  const localPoints = +JSON.parse(localStorage.getItem('points')!);
  const pointsRef = useRef(localPoints || 0);

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Você errou!\n Pontuação total: ${sequence.length - 1}`,
      });
      if (playerSequence.length > pointsRef.current) {
        localStorage.setItem('points', JSON.stringify(sequence.length - 1));
        pointsRef.current = sequence.length - 1;
      }
      const audio = new Audio(wrongAudio);
      audio.volume = 0.1;
      audio.play();
      reset();
    } else if (playerSequence.length === sequence.length && sequence.length > 0) {
      Swal.fire({
        position: 'top-end',
        title: 'Acertou!',
        showConfirmButton: false,
        backdrop: false,
        timer: 500,
      });
      handleAddSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerSequence]);

  return [sequence, handlePlayerClick, pointsRef, handleStartGame];
}

export default useSimon;
