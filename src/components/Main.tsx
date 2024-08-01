import Buttons from './Buttons';

function Main() {
  return (
    <main className="h-[70%]">
      <article className="grid grid-cols-2 gap-10">
        <Buttons bg="bg-green-500" />
        <Buttons bg="bg-red-500" />
        <Buttons bg="bg-yellow-500" />
        <Buttons bg="bg-blue-500" />
      </article>
    </main>
  );
}

export default Main;
