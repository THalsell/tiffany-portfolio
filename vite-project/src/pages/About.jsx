import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: isMobile ? 3 : 6,
        bgcolor: '#f8f3f2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        sx={{
          fontWeight: 'bold',
          color: '#223d3c',
          mb: 3,
        }}
      >
        About Me
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '800px',
          lineHeight: 1.8,
          color: '#333',
          textAlign: 'center',
        }}
      >
        I'm Tiffany Halsell, a full stack web developer with a passion for clean,
        responsive design and problem solving. My background in both front-end and
        back-end technologies allows me to build complete, functional applications
        that are user-friendly and efficient.
        <br /><br />
        When I’m not coding, I love learning new technologies, working on personal
        projects, and growing my skills to become the best developer I can be.
      </Typography>
    </Box>
  );
};

export default About;
