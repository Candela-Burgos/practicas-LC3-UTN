import PropTypes from "prop-types";

const AvailableBeers = ({ name, style, price, available }) => {
  return (
    <>
      {available ? (
        <div>
          <h2>{name}</h2>
          <p>{style}</p>
          <p>{price * 1350}</p>
          <p>{available == true ? "Disponible" : "No disponible"}</p>
        </div>
      ) : (
        <p>No hay cervezas disponibles</p>
      )}
    </>
  );
};

AvailableBeers.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.bool,
};

export default AvailableBeers;
