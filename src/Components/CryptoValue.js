import React from 'react';
import PropTypes from 'prop-types';

const CryptoValue = (props) => {
  const { name, price } = props;
  return (
    <section className="flex cypto-value-wrapper">
      <div>
        <img
          className="crypto-image"
          src=""
          alt="
              a crypto value"
        />
      </div>
      <div className="crypto-value">
        <p>
          {name}
          {' '}
        </p>
        <p>
          {price}
          {' '}
        </p>
      </div>
    </section>
  );
};

CryptoValue.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CryptoValue;
