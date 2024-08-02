import { createContext, MutableRefObject } from 'react';
import { Colors } from '../Types/Colors';
import { Difficulty } from '../Types/difficulty';

export type ContextGameType = {
  game: {
    sequence: Colors[],
    handlePlayerClick: (color: Colors) => void,
    pointsRef: MutableRefObject<number>,
    handleStartGame:() => void,
    win: boolean,
    setWin: (p: boolean) => void
  },
  shine: {
    shine: Colors | undefined,
    setShine: (c: Colors | undefined) => void,
  },
  disabled: {
    disabled: boolean,
    setDisabled: (d: boolean) => void,
  },
  difficulty: {
    difficulty: Difficulty,
    setDifficulty: (d: Difficulty) => void,
  },
  config: {
    config: boolean,
    setConfig: (c: boolean) => void,
  }
  volume: {
    volume: number,
    setVolume: (v: number) => void,
  }
};

const ContextGame = createContext({} as ContextGameType);
export default ContextGame;
