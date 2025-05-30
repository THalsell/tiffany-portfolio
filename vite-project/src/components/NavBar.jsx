import { Stack, Link as MuiLink, Typography, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbarStyles';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Projects', path: '/projects' },
  { text: 'Resume', path: '/resume' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <Stack spacing={4} alignItems="center" justifyContent="center" sx={styles.wrapper}>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Box key={item.text} sx={styles.box(index)}>
            <MuiLink component={Link} to={item.path} underline="none" sx={styles.link(isActive)}>
              <Typography>{item.text}</Typography>
            </MuiLink>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Navbar;