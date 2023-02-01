import PropTypes from "prop-types";

function JokeText({ joke }) {
  console.log(joke);
  return (
    <>
      <div>{joke.setup}</div>
      <div>{joke.punchline}</div>
    </>
  );
}

JokeText.propTypes = {
  joke: PropTypes.string.isRequired,
};

export default JokeText;
