import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CryptoValue from './CryptoValue';
// import HighestJump from './HighestJump';
import Header from './Header';

const MainPage = () => {
  const state = useSelector((state) => state.value);
  const crypto = state.map((elem) => (
    <li key={elem.name}>
      <Link to={`/${elem.name}`}>
        <CryptoValue name={elem.name} price={elem.price_usd} />
      </Link>
    </li>
  ));
  return (
    <section>
      <Header currentView="Top ranked crypto values" />
      {/* <HighestJump /> */}
      <ul>
        {crypto}
      </ul>
    </section>
  );
};

export default MainPage;
