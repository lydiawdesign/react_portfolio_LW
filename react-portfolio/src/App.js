import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Importing components
import NavBar from './components/Nav';
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       < NavBar />
       < Header />
       {/* < About /> */}
       < Portfolio /> 
       < Contact />
       < Footer /> 
    </div>
  );
}

export default App;

