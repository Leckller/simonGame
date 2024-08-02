import { useContext } from 'react';
import ContextGame from '../Context/ContextGame';
import { Difficulty } from '../Types/difficulty';

function Config() {
  const { difficulty: { difficulty, setDifficulty },
    config: { setConfig }, volume: { setVolume, volume } } = useContext(ContextGame);
  const bg = 'bg-[#ff6e72]';
  const handleChangeVol = (value: number) => {
    localStorage.setItem('volume', JSON.stringify(value / 100));
    setVolume(value / 100);
  };
  const handleChangeDiff = (value: Difficulty) => {
    setDifficulty(value);
    localStorage.setItem('difficulty', JSON.stringify(value));
  };
  return (
    <aside
      className="absolute bg-white flex flex-col items-center
      gap-5 z-50
      w-[80vw] max-w-[550px] h-[80vh] max-h-[500px] text-black
      "
    >
      <header
        className="flex font-semibold flex-row w-full justify-between p-5
      border-b-2"
      >
        <h2 className="text-xl font-bold md:text-3xl">Configurações</h2>
        <button
          className="font-black"
          onClick={ () => setConfig(false) }
        >
          X
        </button>
      </header>
      <section className="flex flex-col gap-5 w-full pr-5 pl-5 pb-5 border-b-2">
        <h2 className="text-lg font-semibold md:text-2xl">Dificuldade</h2>
        <article className="flex flex-row w-full justify-between flex-wrap">
          <label
            className={ ` ${difficulty === 1200 ? bg : ''} hover:cursor-pointer
              w-[70px] rounded-2xl h-10 flex items-center justify-center
            ` }
          >
            Fácil
            <input
              className="invisible absolute"
              name="difficulty"
              checked={ difficulty === 1200 }
              type="radio"
              onClick={ () => handleChangeDiff(1200) }
            />
          </label>

          <label
            className={ ` ${difficulty === 800 ? bg : ''} hover:cursor-pointer
              w-[70px] rounded-2xl h-10 flex items-center justify-center
            ` }
          >
            Médio
            <input
              className="invisible absolute"
              name="difficulty"
              checked={ difficulty === 800 }
              type="radio"
              onClick={ () => handleChangeDiff(800) }
            />
          </label>

          <label
            className={ ` ${difficulty === 300 ? bg : ''} hover:cursor-pointer
              w-[70px] rounded-2xl h-10 flex items-center justify-center
            ` }
          >
            Difícil
            <input
              className="invisible absolute"
              name="difficulty"
              checked={ difficulty === 300 }
              type="radio"
              onClick={ () => handleChangeDiff(300) }
            />
          </label>

          <label
            className={ ` ${difficulty === 100 ? bg : ''} hover:cursor-pointer
              w-[70px] rounded-2xl h-10 flex items-center justify-center
            ` }
          >
            Extremo
            <input
              className="invisible absolute"
              name="difficulty"
              checked={ difficulty === 100 }
              type="radio"
              onClick={ () => handleChangeDiff(100) }
            />
          </label>
        </article>
      </section>
      <section className="w-full pb-5 pr-5 pl-5 flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-semibold md:text-2xl">Volume</h2>
          <p>{(volume * 100).toFixed()}</p>
        </div>
        <input
          type="range"
          max={ 100 }
          min={ 0 }
          value={ volume * 100 }
          onChange={ ({ target: { value } }) => handleChangeVol(+value) }
        />
      </section>
    </aside>
  );
}

export default Config;
