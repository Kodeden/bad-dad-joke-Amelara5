import PropTypes from "prop-types";
import JokeVote from "./JokeVote";

function JokeText({ joke, handleClick }) {
  if (joke) {
    return (
      <>
        <p className="px-6 text-center text-lg">{joke?.setup}</p>
        <p className="text-center text-rust">{joke?.punchline}</p>
        <div>
          <JokeVote handleClick={handleClick} message={"👍🏽 Funny 👍🏾"} />
          <JokeVote handleClick={handleClick} message={"👎🏽 Bad 👎🏾"} />
        </div>
      </>
    );
  }
}

JokeText.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
};

export default JokeText;
