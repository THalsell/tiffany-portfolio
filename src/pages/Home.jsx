/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
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

// Gradient animation for name
const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Typing animation
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Blink animation for cursor
const blink = keyframes`
  50% {
    border-color: transparent;
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

// Name headline with gradient animation
const Headline = styled(Typography)({
  fontFamily: '"Ms Madi", cursive',
  fontSize: '4rem',
  background: 'linear-gradient(45deg, #8B5E3C, #C89968, #8B5E3C, #A9745A)',
  backgroundSize: '300% 300%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${gradientShift} 4s ease infinite`,
  textShadow: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  padding: '10px 20px',
  borderRadius: '12px',
  marginBottom: '75px',
});

// Typing animation with max-width
const typingWithMaxWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 680px;
  }
`;

// Professional description with typing effect
const SubText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontSize: '1.5rem',
  color: '#5E453B',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  padding: theme.spacing(2),
  borderRadius: '12px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  borderRight: '3px solid #8B5E3C',
  margin: '0 auto',
  maxWidth: '680px',
  width: '0',
  animation: `${typingWithMaxWidth} 4s steps(65, end) 0.5s forwards, ${blink} 0.75s step-end infinite`,
  '@media (max-width: 600px)': {
    fontSize: '1.2rem',
    whiteSpace: 'normal',
    width: 'auto',
    borderRight: 'none',
    animation: `${fadeIn} 1s ease`,
    animationDelay: '0.5s',
    animationFillMode: 'both',
  },
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
          component={Link}
          to="/contact"
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
