import { useState } from "react";

function useJoke() {
  const [joke, setJoke] = useState("");
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  const handleClick = (event) => {
    if (event.target.textContent.includes("&#x1F44D;&#127997")) {
      setGoodJokes((jokeList) => [...jokeList, joke]);
    } else if (event.target.textContent.includes("&#x1F44E;&#127997")) {
      setBadJokes((jokeList) => [...jokeList, joke]);
    }
    setJoke(null);
  };

  return { joke, setJoke, goodJokes, badJokes, handleClick };
}

export default useJoke;
