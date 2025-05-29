import { Stack, Link as MuiLink } from '@mui/material';

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

      
      
    </>
  );
};

export default Navbar;
