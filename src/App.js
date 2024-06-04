// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ChatbotPage from './pages/ChatbotPage';
import Navbar from './components/Navbar';
import DamagePage from './pages/DamagePage';
import UnDamagePage from './pages/UnDamagePage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/damage" element={<DamagePage />} />
          <Route path="/undamage" element={<UnDamagePage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
