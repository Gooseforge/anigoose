import React from 'react';
import { Route, Switch, MemoryRouter } from 'react-router';
import { NavigationProvider, LayoutManager } from '@atlaskit/navigation-next';

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
    <NavigationProvider>
      <LayoutManager
        globalNavigation={() => null}
        productNavigation={() => null}
        containerNavigation={() => null}
      >
        <MemoryRouter>
          <Switch>
            <Route exact path="/" component={() => null} />
            <Route path="/login" component={() => null} />
            <Route path="/register" component={() => null} />
            <Route path="/sponsor" component={() => null} />
          </Switch>
        </MemoryRouter>
      </LayoutManager>
    </NavigationProvider>
  </Provider>
);

export default App;
