import PropTypes from "prop-types";

function JokeList({ listOfJokes }) {
  return (
    <>
      {listOfJokes.map((joke) => {
        return <p key={joke.id}>{`${joke.setup} ${joke.punchline}`}</p>;
      })}
    </>
  );
}

JokeList.propTypes = {
  listOfJokes: PropTypes.arrayOf(
    PropTypes.shape({
      setup: PropTypes.string.isRequired,
      punchline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default JokeList;
