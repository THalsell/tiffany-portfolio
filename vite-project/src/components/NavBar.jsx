import { useState } from 'react';
import {
  Box,
  Link as MuiLink,
  IconButton,
  Drawer,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbarStyles';

// Define your nav links
const navItems = [
  { text: 'About', path: '/about' },
  { text: 'Projects', path: '/projects' },
  { text: 'Resume', path: '/resume' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/* Desktop Navbar */}
      <Box
        sx={{
          ...styles.wrapper,
          display: { xs: 'none', md: 'flex' }, // hide on mobile
        }}
      >
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Box key={item.text} sx={styles.box(index)}>
              <MuiLink
                component={Link}
                to={item.path}
                underline="none"
                sx={styles.link(isActive)}
              >
                {item.text}
              </MuiLink>
            </Box>
          );
        })}
      </Box>

      {/* Mobile Menu Icon */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1200,
          display: { xs: 'flex', md: 'none' }, // only show on mobile
          backgroundColor: 'rgba(255,255,255,0.8)',
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{
            width: 200,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            backgroundColor: '#fffdfb',
          }}
        >
          {navItems.map((item) => (
            <MuiLink
              key={item.text}
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
              underline="hover"
              sx={{
                fontFamily: '"Ms Madi", cursive',
                fontSize: '1.5rem',
                color: '#8B5E3C',
              }}
            >
              {item.text}
            </MuiLink>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
