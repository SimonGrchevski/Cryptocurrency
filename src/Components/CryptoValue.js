import React from 'react';
import PropTypes from 'prop-types';
import img from '../img.jpg';

const CryptoValue = (props) => {
  const { name, price } = props;
  return (
    <section className="crypto-value-wrapper">
      <div className="image-wrapper">
        <img
          className="crypto-image"
          src={img}
          alt="
              a crypto value"
        />
      </div>
      <div className="crypto-value">
        <p className="txt-bold">
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
