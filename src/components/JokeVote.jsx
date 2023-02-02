import PropTypes from "prop-types";

function JokeVote({ handleClick, message }) {
  return (
    <>
      <button
        className="my-3 mx-1 rounded bg-bright-yellow-crayola px-4 py-2 text-blood-red "
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
