import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Details from './Components/Details';
import Header from './Components/Header';
import { loadCrypto } from './redux/reducers/cryptoReducers';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCrypto());
  }, []);
  return (
    <div>
      <Header />
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Details />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
