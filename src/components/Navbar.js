import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Biblioteca
        </Typography>
        <Button color="inherit" component={Link} to="/">Página principal</Button>
        <Button color="inherit" component={Link} to="/formulario">Formulários</Button>
        <Button color="inherit" component={Link} to="/lista-livros">Lista de Livros</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
