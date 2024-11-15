import React from 'react'
import Navbar from './components/layout/Navbar';
import 'remixicon/fonts/remixicon.css';
import "./app.css"
import Home from './components/pages/Home';
// import Navb from './Navb';

const App = () => {

  return (
    <>
      <Navbar />
      <Home />

    </>
  );
}

export default App
