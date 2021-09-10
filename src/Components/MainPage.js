import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CryptoValue from './CryptoValue';
// import HighestJump from './HighestJump';
import Header from './Header';
import Breakdown from './Breakdown';

const MainPage = () => {
  const state = useSelector((state) => state.value);
  const highest = [...state].sort((a, b) => +b.percent_change_24h - +a.percent_change_24h)[0];
  console.log(highest);
  // UGLY CODE INCOMING!
  let rows = 0;
  let col = 0;
  const crypto = state.map((elem) => {
    let cl = '';
    if (col >= 2) {
      col = 0;
      rows += 1;
    }
    if ((rows + col) % 2 === 0) cl = 'crypto-value-wrapper crypto-main bg-blue';
    else cl = 'crypto-value-wrapper crypto-main bg-dark-blue';
    col += 1;
    // NOT DEAD YET?
    return (
      <li key={elem.name}>
        <Link to={`/${elem.name}`}>
          <CryptoValue name={elem.name} price={elem.price_usd} classList={cl} />
        </Link>
      </li>
    );
  });
  return (
    <section>
      <Header currentView="Top ranked crypto values" />
      {/* <HighestJump /> */}
      <Breakdown text="Stats by rank" />
      <ul className="crypto-ul">
        {crypto}
      </ul>
    </section>
  );
};

export default MainPage;
