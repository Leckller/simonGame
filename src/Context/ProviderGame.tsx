import { ReactNode, useState } from 'react';
import ContextGame from './ContextGame';
import useSimon from '../hooks/useSimon';
import { Difficulty } from '../Types/difficulty';
import { Colors } from '../Types/Colors';

function ProviderGame({ children }: { children: ReactNode }) {
  const localVol = +JSON.parse(localStorage.getItem('volume')!);
  const localDiff = +JSON.parse(localStorage.getItem('difficulty')!) as Difficulty;
  const [win, setWin] = useState(false);
  const [sequence, handlePlayerClick, points, handleStartGame] = useSimon(setWin);
  const [shine, setShine] = useState<Colors>();
  const [disabled, setDisabled] = useState(false);
  const [config, setConfig] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>(localDiff || 800);
  const [volume, setVolume] = useState(localVol || 0.4);

  return (
    <ContextGame.Provider
      value={ {
        config: { config, setConfig },
        shine: { setShine, shine },
        disabled: { disabled, setDisabled },
        game: { handlePlayerClick, handleStartGame, points, sequence, win, setWin },
        difficulty: { difficulty, setDifficulty },
        volume: { setVolume, volume },
      } }
    >
      {children}
    </ContextGame.Provider>
  );
}

export default ProviderGame;
