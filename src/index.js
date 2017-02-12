import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import App from './components/App/App';
import Search from './containers/Search/Search';
import Cart from './containers/Cart/Cart'

import './index.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Search} />
        <Route path="search" component={Search} />
        <Route path="cart" component={Cart} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
