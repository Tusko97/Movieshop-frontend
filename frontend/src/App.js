import React from 'react';
import './App.css';
import Home from "./views/Home"
import MoviesPage from './Components/MoviesPage';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
         <Router>
    <div className= "links">
      {/* <NavBar/> */}
     <Routes>
     <Route path = "/" element = {<Home/>}/>
      <Route path = "/MoviesPage" element = {<MoviesPage/>}/>
      </Routes>
      </div>
      </Router>
      </div>
    
    
  );
}

export default App;
