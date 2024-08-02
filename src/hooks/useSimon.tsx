import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import wrongAudio from '../sounds/wrong.mp3';
import { Colors } from '../Types/Colors';

const colors: Colors[] = ['blue', 'green', 'red', 'yellow'];

function getRandomColor(): Colors {
  const randomColor = colors[Math.floor(Math.random() * (colors.length))];
  return randomColor;
}

function useSimon(setWin: React.Dispatch<React.SetStateAction<boolean>>):
[Colors[], (color: Colors) => void, number, () => void] {
  const [sequence, setSequence] = useState<Colors[]>([]);
  const [playerSequence, setPlayerSequence] = useState<Colors[]>([]);
  const localPoints = +JSON.parse(localStorage.getItem('points')!);
  const [points, setPoints] = useState(localPoints || 0);

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
      if (playerSequence.length > points) {
        localStorage.setItem('points', JSON.stringify(sequence.length - 1));
        setPoints(sequence.length - 1);
      }
      setWin(false);
      const audio = new Audio(wrongAudio);
      audio.volume = 0.1;
      audio.play();
      reset();
    } else if (playerSequence.length === sequence.length && sequence.length > 0) {
      setWin(true);
      handleAddSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerSequence]);

  return [sequence, handlePlayerClick, points, handleStartGame];
}

export default useSimon;
