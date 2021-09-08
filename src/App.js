import React from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Details from './Components/Details';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Details />
    </div>
  );
}

export default App;
