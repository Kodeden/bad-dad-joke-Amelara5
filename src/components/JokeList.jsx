import PropTypes from "prop-types";

function JokeList({ title, listOfJokes }) {
  return (
    <>
      <section className="max-w-md basis-1/2">
        <h2 className=" mx-2 min-w-full rounded-lg bg-dark-red py-3 text-center text-bright-yellow-crayola">
          {title}
        </h2>
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
      </section>
    </>
  );
}
JokeList.propTypes = {
  title: PropTypes.string.isRequired,
  listOfJokes: PropTypes.arrayOf(
    PropTypes.shape({
      setup: PropTypes.string.isRequired,
      punchline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default JokeList;
