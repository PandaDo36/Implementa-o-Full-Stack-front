import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axiosInstance from '../axiosInstance';
import LivroList from '../components/LivroList';

const ListaLivros = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axiosInstance.get('')
      .then(response => setLivros(response.data))
      .catch(error => console.error('Error fetching livros:', error));
  }, []);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Livros
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <LivroList livros={livros} />
      </Box>
    </Container>
  );
};

export default ListaLivros;
