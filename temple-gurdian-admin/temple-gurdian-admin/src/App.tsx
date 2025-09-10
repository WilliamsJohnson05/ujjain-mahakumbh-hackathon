import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SOSAlerts from './pages/SOSAlerts';
import Participants from './pages/Participants';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#ffb62f] to-[#ff7b26]">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SOSAlerts />} />
            <Route path="participants" element={<Participants />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;