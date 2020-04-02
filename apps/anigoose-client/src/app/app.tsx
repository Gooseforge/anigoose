import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './store/reducers';

const store = configureStore({
  reducer,
  devTools: {},
  middleware: [],
  enhancers: []
});

export const App = () => (
  <Provider store={store}>
    <div />
  </Provider>
);

export default App;
