import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Planet from './components/Planet/Planet';
import theme from './style/theme';
import './App.css';

function App() {

  const [planetName, setPlanetName] = useState('Mercury');

const setTheme = (planetName: string) => setPlanetName(planetName);

  useEffect(()=>{
    // @ts-ignore
    document.documentElement.style.setProperty(`--clrPlanet`, theme[planetName]);
  },[planetName]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets/:name/" element={<Planet setTheme={setTheme}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
