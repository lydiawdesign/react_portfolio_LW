import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// Importing components
import NavBar from './components/nav';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
       < NavBar />
       < Header />
       < Portfolio />
       < Contact />
       < Footer />
    </div>
  );
}

export default App;

