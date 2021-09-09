import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Detail from './Detail';

// CryptoValue should have an bool prop so you can change from row to col
// every detail is wrapped in a component.
// should loop thru the data  and create detail section
// for every obj
const Details = () => {
  const state = useSelector((state) => state.value);
  const details = state.map((elem) => (
    <div key={elem.name}>
      <Route path={`/${elem.name}`}>
        <Detail detail={elem} />
      </Route>
    </div>

  ));
  return (
    <div>
      {details}
    </div>
  );
};

export default Details;
