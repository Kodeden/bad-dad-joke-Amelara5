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
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default JokeText;
