import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { ThemeProvider } from 'material-ui-theme/provider';
import Root from 'pages/Root';
import rootReducer from 'store';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const history = createBrowserHistory();

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Root />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
);
