import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';
import I18n from 'redux-i18n';
import { Provider } from "react-redux";
import I18n from 'redux-i18n/immutable';

import { translations } from './translations'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18n translations={translations} initialLang="de" fallbackLang="en">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18n>
  </Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
