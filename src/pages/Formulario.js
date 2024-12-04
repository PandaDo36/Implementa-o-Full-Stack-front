import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import LivroForm from '../components/LivroForm';

const Formulario = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Adicionar Novo Livro
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <LivroForm />
      </Box>
    </Container>
  );
};

export default Formulario;
