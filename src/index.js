import React, {Suspence} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as  Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from  "redux";
import orderReducer from "./Commponents/redux/reducer/orderReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["uz", "ru", "en"],
    fallbackLng: "ru",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });
  
  const store = createStore(orderReducer, composeWithDevTools())
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

