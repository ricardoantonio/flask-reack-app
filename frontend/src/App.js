import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./translations/i18n";
import i18n from './translations/i18n'

function App() {
  const [getMessage, setGetMessage] = useState({});
  const { t } = useTranslation();
  const [language, setLanguage] = useState('es')

  const handleOnClick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    axios
      .get("api/hello")
      .then((response) => {
        console.log("SUCCESS", response);
        setGetMessage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('welcome')}</p>
        <div>
          {getMessage.status === 200 ? (
            <h3>{getMessage.data.message}</h3>
          ) : (
            <h3>LOADING</h3>
          )}
        </div>
        <button value='es' onClick={handleOnClick}>Es</button>
        <button value='en' onClick={handleOnClick}>En</button>
      </header>
    </div>
  );
}

export default App;
