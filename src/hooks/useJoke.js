import { useState } from "react";

function useJoke() {
  const [joke, setJoke] = useState(null);
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  const handleClick = (event) => {
    if (event.target.textContent.includes("Funny")) {
      setGoodJokes((jokeList) => [...jokeList, joke]);
    } else if (event.target.textContent.includes("Bad")) {
      setBadJokes((jokeList) => [...jokeList, joke]);
    }
    setJoke(null);
  };

  return { joke, setJoke, goodJokes, badJokes, handleClick };
}

export default useJoke;
