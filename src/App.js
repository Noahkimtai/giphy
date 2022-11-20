import React from 'react';
import './App.css';
import GifListContainer from './components/GifListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <GifListContainer />
    </div>
  );
}

export default App;
