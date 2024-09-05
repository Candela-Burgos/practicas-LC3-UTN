import PropTypes from 'prop-types';

const ChangeDollar = ({onDollarChange, dollar}) => {
    /* const ChangeDollarHandler = (e) => {
        onDollarChange(e.target.value)
    } */

  return (
    <>
      <div>
        <label id="dolar">Nuevo precio del dolar: </label>
        <input
          name="dolar"
          type="numer"
          onChange={(e) => onDollarChange(e.target.value)}
          value={dollar}
        />
      </div>
    </>
  );
}

ChangeDollar.propTypes = {
  onDollarChange: PropTypes.func,
  dollar: PropTypes.number
};

export default ChangeDollar