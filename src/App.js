import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import CovidTable from './components/covidTable';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';



function App() {
  return (
    <Router>
       <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<CovidTable/>} />

        </Routes>
     
    </div>
    </Router>
   
  );
}

export default App;
