import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
        <Details />
      </Router>

    </div>
  );
}

export default App;
