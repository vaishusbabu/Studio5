import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';
import { Provider } from "react-redux";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <I18nextProvider i18n={i18n}>

    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>

    </Provider >
  </I18nextProvider>
);

reportWebVitals();
