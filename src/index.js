import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import configureStore from './store/configureStore';
import App from './components/App/App';
import Home from './components/Home/Home';
import Search from './containers/Search/Search';
import Cart from './containers/Cart/Cart'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="search" component={Search} />
        <Route path="cart" component={Cart} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
