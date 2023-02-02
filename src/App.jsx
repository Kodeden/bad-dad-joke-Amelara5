import JokeButton from "./components/JokeButton";
import JokeList from "./components/JokeList";
import JokeText from "./components/JokeText";
import useJoke from "./hooks/useJoke";

function App() {
  const { joke, setJoke, goodJokes, badJokes, handleClick } = useJoke();

  return (
    <main className=" flex h-screen flex-col items-center justify-center bg-dark-sienna text-white">
      <JokeButton setJoke={setJoke} />
      <JokeText joke={joke} handleClick={handleClick} />

      <main className="flex gap-2">
        <section className="max-w-md basis-1/2">
          <h2 className=" mx-2 min-w-full rounded-lg bg-dark-red py-3 text-center text-bright-yellow-crayola">
            Dad certified 😎
          </h2>
          <JokeList listOfJokes={goodJokes} />
        </section>

        <section className="max-w-md basis-1/2">
          <h2 className=" mx-2 min-w-full rounded-lg bg-dark-red py-3 text-center text-bright-yellow-crayola">
            Keep trying 🙄
          </h2>
          <JokeList listOfJokes={badJokes} />
        </section>
      </main>
    </main>
  );
}
// Made me giggle
// I felt nothing
// Dad certified 😎
// Keep trying 🙄
// 👍🏽 Funny joke 👍🏾
// 👎🏽 Bad joke 👎🏾
export default App;
