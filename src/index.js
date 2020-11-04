import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// redux related imports
import { createStore } from 'redux';
import { reducer } from './reducers/carReducer';

// joiner imports
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(reducer);


const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
