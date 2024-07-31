import { Colors } from '../hooks/useSimon';
import Buttons from './Buttons';

function Main({ shine, sequence, handlePlayerClick, disabled }:
{ shine: Colors | undefined, sequence: Colors[], disabled: boolean
  handlePlayerClick: (p: Colors) => void }) {
  return (
    <main className="h-[70%]">
      <article className="grid grid-cols-2 gap-10">
        <Buttons
          bg="bg-green-500"
          handlePlayerClick={ handlePlayerClick }
          sequence={ sequence }
          shine={ shine }
          disabled={ disabled }
        />
        <Buttons
          bg="bg-red-500"
          handlePlayerClick={ handlePlayerClick }
          sequence={ sequence }
          shine={ shine }
          disabled={ disabled }
        />
        <Buttons
          bg="bg-yellow-500"
          handlePlayerClick={ handlePlayerClick }
          sequence={ sequence }
          shine={ shine }
          disabled={ disabled }
        />
        <Buttons
          bg="bg-blue-500"
          handlePlayerClick={ handlePlayerClick }
          sequence={ sequence }
          shine={ shine }
          disabled={ disabled }
        />
      </article>
    </main>
  );
}

export default Main;
