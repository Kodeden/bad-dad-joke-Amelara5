import PropTypes from "prop-types";

function JokeButton({ setJoke }) {
  async function getJoke() {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const json = await res.json();
    setJoke(json);
  }

  return (
    <button
      className="my-2 rounded bg-bright-yellow-crayola px-4 py-2 text-blood-red"
      onClick={() => getJoke()}
    >
      Get joke
    </button>
  );
}

JokeButton.propTypes = {
  setJoke: PropTypes.func.isRequired,
};

export default JokeButton;
