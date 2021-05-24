import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Background from './styles/Background';

function App() {

  const[nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const load = () => {
      axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: 'DEMO_KEY'
        }
        
        })
        .then(res => {
          console.log(res.data)
          setNasaData(res.data)
      })
        .catch(err => {
          console.log(err)
        })
    }
    load()
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
