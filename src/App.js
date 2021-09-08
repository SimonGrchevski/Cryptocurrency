import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
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
      <MainPage />
      <Details />
    </div>
  );
}

export default App;
