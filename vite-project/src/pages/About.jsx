/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import tiffanyImage from '../assets/tiffany.png';
import floralBg from '../assets/floralBackground.avif';

// Animation for fade-in effect
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

// Main section styling
const AboutSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  animation: `${fadeIn} 1s ease`,
}));

// Text box under image
const IntroText = styled(Box)({
  backgroundColor: 'rgba(255, 248, 240, 0.85)',
  padding: '16px',
  marginTop: '20px',
  borderRadius: '20px',
  maxWidth: '600px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontSize: '1.1rem',
  color: '#4A4A4A',
  marginLeft: 'auto',
  marginRight: 'auto',
});

// Blur wrapper for image
const ImageWrapper = styled('div')({
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '15px',
  padding: '16px',
  display: 'inline-block',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  marginBottom: '20px',
  
});

// Component
const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url(${floralBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        animation: `${fadeIn} 1s ease`,
      }}
    >
      <AboutSection>
        {/* Intro Header */}
            <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: '"Ms Madi", cursive',
            fontWeight: 600,
            letterSpacing: 1,
            color: '#8B5E3C',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
          }}
        >
          Hey, I’m Tiffany Halsell!
        </Typography>

        {/* Profile Image with Blur */}
        <ImageWrapper>
          <Avatar
            src={tiffanyImage}
          alt="Tiffany Halsell"
          sx={{
            width: 200,
            height: 375,
            mx: 'auto',
            borderRadius: '16px',
            boxShadow: 4,
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        </ImageWrapper>

        {/* Bio Text */}
        <IntroText>
          I graduated from Persevere in 2024 as a full stack web developer who
          loves turning ideas into real web applications. I enjoy tackling both
          frontend and backend challenges, and I’m always up for learning new
          things and working on fun projects.
        </IntroText>
      </AboutSection>
    </Box>
  );
};

export default About;
