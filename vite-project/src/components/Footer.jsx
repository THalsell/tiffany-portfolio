import { Box, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: 3,
        px: 2,
        bgcolor: '#103f3f',
        color: 'white',
        textAlign: 'center',
        mt: 'auto', 
      }}
    >
      
      <Stack direction="row" spacing={3} justifyContent="center">
        <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
        <Link component={RouterLink} to="/about" color="inherit" underline="hover">About</Link>
        <Link component={RouterLink} to="/projects" color="inherit" underline="hover">Projects</Link>
        <Link component={RouterLink} to="/resume" color="inherit" underline="hover">Resume</Link>
      </Stack>
    </Box>
  );
};

export default Footer;
