import AvailableBeers from "../ej 1 availableBeers/AvailableBeers";
import BeerItem from "../ejercicio1 beerItem/BeerItem";
import { useState } from "react";
import PropTypes from "prop-types";
/* import CountStyle from "../ej 1 countStyle/CountStyle"; */

const Beers = ({ beers }) => {
  const [showAvailable, setShowAvailable] = useState(true);

  /* const countIPAorRed = beers.reduce((acc, beer) => {
    if (beer.style == "IPA" || beer.style == "Red") {
      acc++;
    }
    return acc;
  }, 0); */

  return (
    <>
      <div>Cervezas:</div>
      {/* {beers.reduce((acc, beer) => {
        if (beer.style == "IPA" || beer.style == "Red") {
          acc++;
        }
        return acc;
      }, 0)} */}
      {/* {beers.map((beer) => (
        <CountStyle key={beer.id} style={beer.beerStyle} />
      ))} */}
      <button onClick={() => setShowAvailable(!showAvailable)}>
        {showAvailable ? "Solo las disponibles" : "Todas las cervezas"}
      </button>

      {showAvailable
        ? beers
            .filter((b) => b.available == true)
            .map((beer) => (
              <AvailableBeers
                key={beer.id}
                name={beer.beerName}
                style={beer.beerStyle}
                price={beer.price}
                available={beer.available}
              />
            ))
        : beers.map((beer) => (
            <BeerItem
              key={beer.id}
              name={beer.beerName}
              style={beer.beerStyle}
              price={beer.price}
              available={beer.available}
            />
          ))}
    </>
  );
};

Beers.propTypes = {
  beers: PropTypes.array,
};

export default Beers;
