import PropTypes from "prop-types";

function JokeText({ joke }) {
  console.log(joke);
  return (
    <>
      <p>{joke?.setup}</p>
      <p>{joke?.punchline}</p>
    </>
  );
}

JokeText.propTypes = {
  joke: PropTypes.string.isRequired,
};

export default JokeText;
