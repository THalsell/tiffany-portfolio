import { Box, Typography, useTheme, useMediaQuery, IconButton, Stack } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      height: '100vh',
      width: '100vw',
    },
    left: {
      flex: 3,
      bgcolor: '#f8f3f2', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      p: 4,
    },
    name: {
      fontFamily: '"Ms Madi", cursive',
      color: '#223d3c',
      fontSize: isMobile ? '3.5rem' : '6rem',
      lineHeight: 1.2,
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    title: {
      mt: 2,
      fontSize: isMobile ? '1.25rem' : '1.75rem',
      color: '#9a4c2e',
      fontWeight: 300,
    },
    right: {
      flex: 1,
      bgcolor: '#223d3c',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: 3,
    },
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.left}>
        <Typography sx={styles.name}>Tiffany Halsell</Typography>
        <Typography sx={styles.title}>Full Stack Developer</Typography>
        <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
  <IconButton
    component="a"
    href="https://github.com/THalsell"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: '#223d3c' }}
  >
    <GitHub fontSize="large" />
  </IconButton>

  <IconButton
  component="a"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=tiffanyrenee100@gmail.com&su=Hello&"
  target="_blank"
  rel="noopener noreferrer"
  sx={{ color: '#223d3c' }}
>
  <Email fontSize="large" />
</IconButton>


  <IconButton
    component="a"
    href="https://www.linkedin.com/in/tiffany-halsell/"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: '#223d3c' }}
  >
    <LinkedIn fontSize="large" />
  </IconButton>
</Stack>

      </Box>
      <Box sx={styles.right}>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Home;
