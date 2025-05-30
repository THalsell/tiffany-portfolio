
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#103f3f', // Dark teal background
  color: 'white',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  textAlign: 'center',
  minHeight: '100vh',
}));

const IntroText = styled(Box)(({ theme }) => ({
  backgroundColor: '#80c88c', // Light green
  color: 'white',
  padding: theme.spacing(4),
  margin: '0 auto',
  maxWidth: '700px',
  borderRadius: '50px',
  fontSize: '1.2rem',
  fontFamily: 'sans-serif',
  lineHeight: 1.6,
}));

const About = () => {
  return (
    <AboutSection>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 500, letterSpacing: 1 }}>
        HEY, I’M TIFFANY
      </Typography>

      <IntroText>
        I graduated from Persevere in 2024 as a full stack developer who loves turning ideas into real web apps. I enjoy tackling both frontend and backend challenges and I’m always up for learning new stuff and working fun projects.
      </IntroText>
    </AboutSection>
  );
};

export default About;
