import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CountStyle = ({ style }) => {
  const [displayCount, setDisplayCount] = useState(0);
  let count = 0;

  useEffect(() => {
    if (style === "IPA" || style === "Red") {
      setDisplayCount(count + 1);
    }
  }, [style, count]);

  return (
    <>
      <h2>{displayCount}</h2>
    </>
  );
  
};

CountStyle.propTypes = {
  style: PropTypes.string,
};

export default CountStyle;
