import { Box, Typography, Paper, Button, useTheme, useMediaQuery } from '@mui/material';
import { Download } from '@mui/icons-material';
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Tiffany.png';
    link.download = 'Tiffany_Halsell_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={backgroundStyles(floralResumeBg)}>
      {/* Page Title */}
      <Typography variant={isMobile ? 'h5' : 'h3'} sx={titleStyles} data-aos="fade-down">
        My Resume
      </Typography>

      {/* Resume Preview */}
      <Paper elevation={6} sx={paperStyles} data-aos="zoom-in" data-aos-delay="200">
        <Box
          component="img"
          src="/Tiffany.png"
          alt="Tiffany Halsell Resume"
          sx={imageStyles}
        />
      </Paper>

      {/* Download Button */}
      <Button
        variant="contained"
        startIcon={<Download />}
        onClick={handleDownload}
        sx={{
          mt: 3,
          backgroundColor: '#8B5E3C',
          color: 'white',
          px: 4,
          py: 1.5,
          fontSize: '1rem',
          textTransform: 'none',
          fontFamily: '"Playfair Display", serif',
          '&:hover': {
            backgroundColor: '#6B4A30',
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Resume;
