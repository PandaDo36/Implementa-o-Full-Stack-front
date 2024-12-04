import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const LivroList = ({ livros }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {livros.map(livro => (
        <Card key={livro.id} sx={{ margin: 2, maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5">{livro.titulo}</Typography>
            <Typography variant="subtitle1">Autor: {livro.autor}</Typography>
            <Typography variant="body2">ISBN: {livro.isbn}</Typography>
            <Typography variant="body2">Ano de Publicação: {livro.anoPublicacao}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default LivroList;
