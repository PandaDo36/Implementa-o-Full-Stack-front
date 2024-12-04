import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import { TextField, Button, Card, CardContent, Box } from '@mui/material';

const LivroForm = ({ onSave }) => {
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    isbn: '',
    anoPublicacao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('/', livro)
      .then(response => {
        onSave(response.data);
        setLivro({
          titulo: '',
          autor: '',
          isbn: '',
          anoPublicacao: ''
        });
      })
      .catch(error => console.error('Error creating livro:', error));
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Título"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Autor"
            name="autor"
            value={livro.autor}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="ISBN"
            name="isbn"
            value={livro.isbn}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ano de Publicação"
            name="anoPublicacao"
            value={livro.anoPublicacao}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Criar
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default LivroForm;
