import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Vehicles from './pages/Vehicles/Vehicles';
import Support from './pages/Support/Support';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
