import React from 'react';
import { useSelector } from 'react-redux';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import CryptoValue from './CryptoValue';
import HighestJump from './HighestJump';

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
      <HighestJump />
      <Router>
        <ul>
          {crypto}
        </ul>
      </Router>
    </section>
  );
};

export default MainPage;
