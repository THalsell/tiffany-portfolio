import { Stack, Link as MuiLink, IconButton } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Stack spacing={3} alignItems="center">
        <MuiLink component={Link} to="/about" color="inherit" underline="hover">
          About Me
        </MuiLink>
        <MuiLink component={Link} to="/projects" color="inherit" underline="hover">
          Projects
        </MuiLink>
        <MuiLink component={Link} to="/resume" color="inherit" underline="hover">
          Resume
        </MuiLink>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <IconButton href="mailto:tiffany@example.com" color="inherit">
          <Email />
        </IconButton>
        <IconButton href="https://github.com/THalsell" target="_blank" color="inherit">
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/your-link" target="_blank" color="inherit">
          <LinkedIn />
        </IconButton>
      </Stack>
    </>
  );
};

export default Navbar;
