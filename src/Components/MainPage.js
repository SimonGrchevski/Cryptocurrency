import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CryptoValue from './CryptoValue';
import HighestJump from './HighestJump';
import Header from './Header';
import { loadCrypto } from '../redux/reducers/cryptoReducers';

const getHighest = (state) => {
  if (state.length) {
    const highest = [...state].sort((a, b) => (
      +b.percent_change_24h - +a.percent_change_24h))[0];
    return (
      <HighestJump
        name={highest.name}
        percent={highest.percent_change_24h}
        price={highest.price_usd}
        rank={highest.rank}
      />
    );
  }
  return <></>;
};

const handleChange = (limit, dispatch) => {
  dispatch(loadCrypto(limit));
  document.querySelector('.rankedBy').innerHTML = `Top ${limit} rank: `;
};

const MainPage = () => {
  const state = useSelector((state) => state.value);
  const dispatch = useDispatch();
  // UGLY CODE INCOMING!
  let rows = 0;
  let col = 0;
  const crypto = state.map((elem) => {
    let cl = '';
    if (col >= 2) {
      col = 0;
      rows += 1;
    }
    if ((rows + col) % 2 === 0) cl = 'crypto-value-wrapper crypto-main bg-dark-blue';
    else cl = 'crypto-value-wrapper crypto-main bg-blue';
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
      {getHighest(state)}
      <div className="breakdown bg-dark-blue top-rank-wrapper">
        <div>
          <p className="rankedBy">Top 10 rank: </p>
        </div>
        <div>
          <select
            className="rank"
            onChange={(e) => handleChange(e.target.value, dispatch)}
          >
            <option value="10">top 10</option>
            <option value="20">top 20</option>
            <option value="30">top 30</option>
            <option value="40">top 40</option>
            <option value="50">top 50</option>
            <option value="100">top 100</option>
          </select>
        </div>
      </div>

      <ul className="crypto-ul">
        {crypto}
      </ul>
    </section>
  );
};

export default MainPage;
