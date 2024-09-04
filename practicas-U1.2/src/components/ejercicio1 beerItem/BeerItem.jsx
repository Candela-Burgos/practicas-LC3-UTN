import PropTypes from "prop-types";

const BeerItem = ({ name, style, price, available }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>{style}</p>
        <p>{price * 1350}</p>
        <p>{available == true ? "Disponible" : "No disponible"}</p>
      </div>
    </>
  );
};

BeerItem.propTypes = {
    name: PropTypes.string,
    style: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool,
}

export default BeerItem;