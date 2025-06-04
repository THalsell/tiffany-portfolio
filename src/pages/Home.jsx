/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import homeFloralBG from '../assets/homeFloralBG.png';
import NavBar from '../components/NavBar';

// Animation: fade-in with upward movement
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Wrapper with full-screen floral background
const HomeWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundImage: `url(${homeFloralBG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  animation: `${fadeIn} 1s ease`,
}));

// Name headline
const Headline = styled(Typography)({
  fontFamily: '"Ms Madi", cursive',
  fontSize: '4rem',
  color: '#8B5E3C',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.15)',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  padding: '10px 20px',
  borderRadius: '12px',
  marginBottom: '75px',
});

// Professional description
const SubText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontSize: '1.5rem',
  color: '#5E453B',
  maxWidth: '600px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  padding: theme.spacing(2),
  borderRadius: '12px',
  animation: `${fadeIn} 1s ease`,
  animationDelay: '0.5s',
  animationFillMode: 'both',
}));

// Shared icon button style
const iconStyles = {
  color: '#ea794d',
};

const Home = () => {
  return (
    <HomeWrapper>
      <NavBar />

      <Headline>Tiffany Halsell</Headline>

      <SubText>
        Full Stack Web Developer • Creative Thinker • Code Storyteller
      </SubText>

      <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
        <IconButton
          component="a"
          href="https://github.com/THalsell"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyles}
        >
          <GitHub fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tiffanyrenee100@gmail.com&su=Hello&"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyles}
        >
          <Email fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/tiffany-halsell/"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyles}
        >
          <LinkedIn fontSize="large" />
        </IconButton>
      </Stack>
    </HomeWrapper>
  );
};

export default Home;
