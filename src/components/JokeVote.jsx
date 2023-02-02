import PropTypes from "prop-types";

function JokeVote({ handleClick, message }) {
  return (
    <>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={handleClick}
      >
        {message}
      </button>
    </>
  );
}

JokeVote.propTypes = {
  handleClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default JokeVote;
