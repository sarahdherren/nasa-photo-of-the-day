import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import { apiUrl, apiKey } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Background from './styles/Background';

function App() {

  const[nasaData, setNasaData] = useState([]);

  useEffect(() => {
      axios.get(apiUrl, {
        params: {
          api_key: apiKey
        }
        
        })
        .then(res => {
          console.log(res.data)
          setNasaData(res.data)
      })
        .catch(err => {
          console.log(err)
        })
  }, [])

  

  return (
    <Background className="App">
      <Header nasaData={nasaData} />
      <Gallery nasaData={nasaData} />
      <Footer nasaData={nasaData} />
    </Background>
  );
}

export default App;
