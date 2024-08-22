import BeerItem from "../ejercicio1 beerItem/BeerItem";
import PropTypes from "prop-types";

const Beers = ({beers}) => {
  return (
    <>
      <div>Cervezas:</div>
      {/* {beers.map((beer) => (
        <BeerItem name={beer.beerName} />
      ))} */}
      <BeerItem beers={beers}/>
    </>
  );
};

Beers.propTypes = {
    beers: PropTypes.array,
}

export default Beers;
