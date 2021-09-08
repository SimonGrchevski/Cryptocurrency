import React from 'react';
import CryptoValue from './CryptoValue'
import HighestJump from './HighestJump';

// In Main page each cryptoValue should be wrapped in a link
const MainPage = () => {
  return (
    <section>
      <HighestJump />
      <CryptoValue />
      <CryptoValue/>
    </section>
  )
}

export default MainPage;