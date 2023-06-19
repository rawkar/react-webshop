import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import './Styles/App.sass';


const App = () => (
  <Router>
    <Routes>
  <Route path="/" element={<HomePage />} />
</Routes>
  </Router>
);

export default App;
