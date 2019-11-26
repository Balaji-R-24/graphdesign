import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import data from './components/data.json';

import Paginations from './components/Pagination';
function App() {
  return (
    <div className="App">
     
      {/* <MyBarChart data={data} /> */}
      <Paginations />
    </div>
  );
}

export default App;
