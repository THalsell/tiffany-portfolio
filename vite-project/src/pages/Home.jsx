import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Navbar from '../components/Navbar';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: '100vh',
        width: '100%',
      }}
    >
      {/* 🟦 LEFT Container */}
      <Box
        sx={{
          flex: 3,
          bgcolor: '#f8f3f2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          sx={{
            fontFamily: '"Brittany", cursive',
            color: 'primary.main',
          }}
        >
          Tiffany Halsell
        </Typography>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          color="secondary"
          sx={{ mt: 2 }}
        >
          Full Stack Developer
        </Typography>
      </Box>

      {/* 🟫 RIGHT Container */}
      <Box
        sx={{
          flex: 1,
          bgcolor: '#223d3c',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
        }}
      >
        <Navbar />
      </Box>
    </Box>
  );
};

export default Home;
