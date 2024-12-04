import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bem-vindo à Biblioteca
        </Typography>
        <Typography variant="h6" component="p">
          Explore nossa coleção de livros e adicione novos títulos.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
