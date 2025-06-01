import { Box, Typography, useTheme, useMediaQuery, IconButton, Stack } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    wrapper: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
    },
    content: {
      flex: 1,
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
    sidebar: {
      width: '200px',
      bgcolor: '#223d3c',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Box sx={styles.wrapper}>
      {/* Left-side main content */}
      <Box sx={styles.content}>
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

      {/* Right-side Navbar */}
      <Box sx={styles.sidebar}>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Home;
