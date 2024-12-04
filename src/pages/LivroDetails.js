import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import { Card, CardContent, Typography } from '@mui/material';

const LivroDetails = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/${id}`)
      .then(response => setLivro(response.data))
      .catch(error => console.error('Error fetching livro:', error));
  }, [id]);

  if (!livro) return <div>Loading...</div>;

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{livro.titulo}</Typography>
        <Typography variant="subtitle1">Autor: {livro.autor}</Typography>
        <Typography variant="subtitle1">ISBN: {livro.isbn}</Typography>
        <Typography variant="subtitle1">Ano de Publicação: {livro.anoPublicacao}</Typography>
      </CardContent>
    </Card>
  );
};

export default LivroDetails;

