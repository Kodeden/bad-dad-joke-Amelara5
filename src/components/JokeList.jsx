import PropTypes from "prop-types";

function JokeList({ listOfJokes }) {
  return (
    <ul>
      {listOfJokes.map((joke) => {
        return (
          <li key={joke.id} className="px-6 text-lg font-bold">
            {`${joke.setup} `}
            <span className=" text-sm font-normal text-rust">
              {joke.punchline}
            </span>
          </li>
        );
      })}
    </ul>
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
