import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";



import * as serviceWorker from './serviceWorker';
import { postReducer } from "./redux/reducers/postReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(postReducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
