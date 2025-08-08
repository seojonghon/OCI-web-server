// src/App.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Welcome to Devias UI
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a customized version of the default React App.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://mui.com"
          target="_blank"
        >
          Learn Material UI
        </Button>
      </Box>
    </Container>
  );
}

export default App;
