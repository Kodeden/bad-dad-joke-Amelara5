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
  listOfJokes: PropTypes.object.isRequired,
};

export default JokeList;
