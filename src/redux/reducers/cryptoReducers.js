import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const loadCrypto = createAsyncThunk('fetchData',
  async () => {
    const result = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=10', { method: 'GET' });
    const res = await result.json();
    // console.log(res);
    return res.data;
  });

const crypto = createSlice({
  name: 'values',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCrypto.fulfilled, (state, action) => action.payload);
  },
});

const reducer = combineReducers({
  value: crypto.reducer,
});

export { reducer, loadCrypto };
