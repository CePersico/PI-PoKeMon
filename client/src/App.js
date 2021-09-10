import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
import  LandingPage from './components/LandingPage';
import Home  from './components/Home.js';
import PokeCreated from './components/PokeCreated';
import Details from './components/Details'

function App() {
  return (
    <BrowserRouter>
    <div className="App">      
      <Switch> 
        <Route exact path = '/' component = { LandingPage }/>
        <Route  path = '/home' component = { Home }/>
        <Route  path = '/pokemons' component = { PokeCreated }/>
        <Route  path = '/pokemons/:id' component = { Details }/>  
      </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;
