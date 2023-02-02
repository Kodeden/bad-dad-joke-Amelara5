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
        <JokeList title={"Dad certified 😎"} listOfJokes={goodJokes} />
        <JokeList title={"Keep trying 🙄"} listOfJokes={badJokes} />
      </main>
    </main>
  );
}
export default App;
