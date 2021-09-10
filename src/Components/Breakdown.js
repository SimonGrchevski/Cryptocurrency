import React from 'react';
import PropTypes from 'prop-types';

const Breakdown = (props) => {
  const { text } = props;
  return (
    <div className="breakdown bg-dark-blue">
      <p>{text}</p>
    </div>
  );
};

Breakdown.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Breakdown;
