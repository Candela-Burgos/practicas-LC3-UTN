import BeerItem from "../beerItem/BeerItem";
import ChangeDollar from "../changeDollar/ChangeDollar";
import { useState } from 'react';
import NewBeer from "../newBeer/NewBeer";

const beers = [
  {
    id: 1,
    beerName: "American",
    beerStyle: "IPA",
    price: 3,
    available: true,
  },
  {
    id: 2,
    beerName: "Argenta",
    beerStyle: "IPA",
    price: 4,
    available: false,
  },
  {
    id: 3,
    beerName: "Irish",
    beerStyle: "Red",
    price: 4,
    available: true,
  },
  {
    id: 4,
    beerName: "Scotish",
    beerStyle: "Red",
    price: 3,
    available: true,
  },
  {
    id: 5,
    beerName: "DeEssoCiTratta",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  {
    id: 6,
    beerName: "Santa APA",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  {
    id: 7,
    beerName: "German",
    beerStyle: "Pilsen",
    price: 1,
    available: true,
  },
  {
    id: 8,
    beerName: "London Porter",
    beerStyle: "Porter",
    price: 2,
    available: false,
  },
  {
    id: 9,
    beerName: "Scotish ALE",
    beerStyle: "Red",
    price: 5,
    available: false,
  },
];

const Beers = () => {
    const [dollar, setDollar] = useState(500)
    const [changeDollar, setChangeDollar] = useState(false)
    const [nwbeers, setNwBeers] = useState(beers); 

    const setDollarHandler = (dollarPriceNow) => {
      setDollar(dollarPriceNow);
    };

    const changeDollarHandler = () => {
      setChangeDollar(!changeDollar)
    };

    const addBeerHandler = (newBeer) => {
      setNwBeers((prevBeers) => [...prevBeers, newBeer]);
    };

  return (
    <>
        <button type="button" onClick={changeDollarHandler}>{ChangeDollar ? 'Esconder' : "Actualizar precio dolar"}</button>
      {changeDollar && <ChangeDollar onDollarChange={setDollarHandler} dollar={dollar}/>}
      {
        beers.map((beer) => (
            <BeerItem key={beer.id} name={beer.beerName} style={beer.beerStyle} price={beer.price * dollar} available={beer.available} />
        ))
      }
      <NewBeer onAddBeer={addBeerHandler}/>
    </>
  );
}

export default Beers