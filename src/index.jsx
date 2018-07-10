import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ticketListReducer from './reducers/post-list-reducer';

const store = createStore(ticketListReducer);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
	module.hot.accept('./components/App', () => {
		render(App);
	});
}
/*eslint-enable */
