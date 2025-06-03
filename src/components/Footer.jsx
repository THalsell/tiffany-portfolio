import { Box, Stack, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Navigation links for the footer
const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
];

// Common link styles
const linkStyles = {
  fontFamily: '"Ms Madi", cursive',
  fontSize: '3rem',
  color: '#8B5E3C',
  '&:hover': {
    color: '#A9745A',
  },
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 2,
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Stack direction="row" spacing={4} justifyContent="center">
        {footerLinks.map(({ label, path }) => (
          <MuiLink
            key={label}
            component={RouterLink}
            to={path}
            underline="hover"
            sx={linkStyles}
          >
            {label}
          </MuiLink>
        ))}
      </Stack>
    </Box>
  );
};

export default Footer;
