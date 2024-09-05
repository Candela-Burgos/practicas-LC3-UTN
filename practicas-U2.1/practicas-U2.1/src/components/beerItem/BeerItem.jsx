import PropTypes from 'prop-types'

const BeerItem = ({name, style, price, available}) => {
  return (
    <>
        <div>
            <h2>{name}</h2>
            <h3>{style}</h3>
            <p>{price}</p>
            <p>{available ? "Disponible" : "No disponible"}</p>
        </div>
    </>
  )
}

BeerItem.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.string,
};

export default BeerItem