import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
import  LandingPage from './components/LandingPage';
import Home  from './components/Home.js';
// import DogCreated from './components/DogCreated';
// import Details from './components/Details'

function App() {
  return (
    <BrowserRouter>
    <div className="App">      
      <Switch> 
        <Route exact path = '/' component = { LandingPage }/>
        <Route  path = '/home' component = { Home }/>
      {/*   <Route  path = '/dog' component = { DogCreated }/>
        <Route  path = '/details/:id' component = { Details }/>
 */}      </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;
