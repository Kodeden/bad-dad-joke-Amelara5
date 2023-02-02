import JokeButton from "./components/JokeButton";
import JokeList from "./components/JokeList";
import JokeText from "./components/JokeText";
import JokeVote from "./components/JokeVote";
import useJoke from "./hooks/useJoke";

function App() {
  const { joke, setJoke, goodJokes, badJokes, handleClick } = useJoke();

  return (
    <main>
      <JokeButton setJoke={setJoke} />
      <JokeText joke={joke} />

      <JokeVote handleClick={handleClick} message={"Funny joke 👍🏽👍🏾"} />
      <JokeList listOfJokes={goodJokes} />

      <JokeVote handleClick={handleClick} message={"Bad joke 👎🏽👎🏾"} />
      <JokeList listOfJokes={badJokes} />
    </main>
  );
}

export default App;
