import JokeButton from "./components/JokeButton";
import JokeList from "./components/JokeList";
import JokeText from "./components/JokeText";
import useJoke from "./hooks/useJoke";

function App() {
  const { joke, setJoke, goodJokes, badJokes, handleClick } = useJoke();

  return (
    <>
      <JokeButton setJoke={setJoke} />
      <JokeText joke={joke} />
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => {
          goodJokeList(joke);
          setJoke("");
        }}
      >
        Funny joke &#x1F44D;&#127997;
      </button>
      <div>
        <JokeList listOfJokes={goodJokes} />
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => {
          badJokeList(joke);
          setJoke("");
        }}
      >
        Bad joke &#x1F44E;&#127997;
      </button>
      <div>
        <JokeList listOfJokes={badJokes} />
      </div>
    </>
  );
}

export default App;
