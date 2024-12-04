import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import ListaLivros from './pages/ListaLivros';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/lista-livros" element={<ListaLivros />} />
      </Routes>
    </Router>
  );
}

export default App;
