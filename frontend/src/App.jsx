import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CityNext from './components/CityNext/CityNext';

function App() {
  return (
    <Router>
      <>
        <ToastContainer />
        <CityNext />
      </>
    </Router>
  );
}

export default App;
