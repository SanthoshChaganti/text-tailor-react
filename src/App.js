// App.js
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About'; // Import the About component
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextTailor" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <BrowserRouter basename="/text-tailor-react">
          <Routes>
          <Route exact path="/text-tailor-react" element={<TextFormPage showAlert={showAlert} title="Enter the Text" mode={mode} />} />
          <Route exact path="/about" element={<AboutPage mode={mode} />} />
          </Routes>
          </BrowserRouter>
        </div>
        
      </Router>
    </>
  );
}

function TextFormPage({ showAlert, title, mode }) {
  const location = useLocation();
  document.title = location.pathname === '/' ? 'Home - TextTailor' : 'TextTailor';
  return <TextForm showAlert={showAlert} title={title} mode={mode} />;
}

function AboutPage({ mode }) {
  const location = useLocation();
  document.title = location.pathname === '/about' ? 'About - TextTailor' : 'TextTailor';
  return <About mode={mode} />;
}

export default App;
