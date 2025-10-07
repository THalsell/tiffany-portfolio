import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import floralResumeBg from '../assets/floralResumeBg.png';

// Reusable style constants
const backgroundStyles = (bg) => ({
  flex: 1,
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  px: 2,
  py: 4,
  textAlign: 'center',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const titleStyles = {
  fontFamily: '"Playfair Display", serif',
  color: '#8B5E3C',
  marginBottom: 3,
};

const paperStyles = {
  width: '90%',
  maxWidth: 850,
  aspectRatio: '8.5 / 11',
  borderRadius: 2,
  overflow: 'hidden',
  border: '2px solid #8B5E3C',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
};

const imageStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

const Resume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={backgroundStyles(floralResumeBg)}>
      {/* Page Title */}
      <Typography variant={isMobile ? 'h5' : 'h3'} sx={titleStyles}>
        My Resume
      </Typography>

      {/* Resume Preview */}
      <Paper elevation={6} sx={paperStyles}>
        <Box
          component="img"
          src="/resume.jpg"
          alt="Tiffany Halsell Resume"
          sx={imageStyles}
        />
      </Paper>
    </Box>
  );
};

export default Resume;
