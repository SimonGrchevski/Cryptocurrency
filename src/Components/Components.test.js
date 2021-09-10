import React from 'react';
import { render, screen } from '@testing-library/react'
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

render(<Provider store={store}><App /></Provider>);

describe("Homepage tests", () => {
    test('Homepage tests', async() => {

    expect(await screen.findByText('Bitcoin')).toBeInTheDocument()
  });
})
