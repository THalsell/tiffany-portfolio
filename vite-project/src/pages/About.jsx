/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import tiffanyImage from '../assets/tiffany.png';
import floralBg from '../assets/floral-bg.jpg';

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

const AboutSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  animation: `${fadeIn} 1s ease`,
}));

const IntroText = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(128, 200, 140, 0.9)', // soft green with transparency
  color: 'white',
  padding: theme.spacing(4),
  margin: '0 auto',
  maxWidth: '700px',
  borderRadius: '50px',
  fontSize: '1.2rem',
  fontFamily: '"Pacifico", cursive',
  lineHeight: 1.6,
  marginTop: theme.spacing(4),
}));

const About = () => {
  return (
    <Box
  sx={{
    minHeight: '100vh',
    backgroundImage: `url(${floralBg})`, // ✅ now using the import
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
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: '"Ms Madi", cursive',
            fontWeight: 600,
            letterSpacing: 1,
            color: '#f8f3f2',
            textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
          }}
        >
          Hey, I’m Tiffany Halsell!
        </Typography>

        <Avatar
          src={tiffanyImage}
          alt="Tiffany Halsell"
          sx={{
            width: 200,
            height: 375,
            mx: 'auto',
            borderRadius: '16px',
            boxShadow: 4,
            border: '3px solid white',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        <IntroText>
          I graduated from Persevere in 2024 as a full stack web developer who loves turning ideas into real web applications. I enjoy tackling both frontend and backend challenges and I’m always up for learning new things and working fun projects.
        </IntroText>
      </AboutSection>
    </Box>
  );
};

export default About;
