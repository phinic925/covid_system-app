import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import CovidTable from './components/covidTable';

function App() {
  return (
    <div className='container'>
      <CovidTable/>
    </div>
  );
}

export default App;
