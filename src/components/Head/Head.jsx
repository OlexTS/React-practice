import React from "react";
import PropTypes from "prop-types";

export const Head = ({ id, clas }) => {
  return (
    <p id={id} className={clas}>
      I am HEAD
    </p>
  );
};

Head.propTypes = {
  id: PropTypes.number.isRequired,
  clas: PropTypes.string.isRequired,
};
