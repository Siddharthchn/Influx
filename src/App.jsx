import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavHero from './components/NavHero';
import Movies from './components/Movies';
import Questions from './components/Questions';
import StepForm from './components/StepForm';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Router>
      <div className="font-altivo">
        <Routes>
          <Route path="/" element={<><NavHero /><Movies /><Questions /></>} />
          <Route path="/details" element={<StepForm />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
