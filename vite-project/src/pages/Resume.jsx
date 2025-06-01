import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';

const Resume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        flex: 1,                 // 🔥 This makes it stretch
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // 👈 Optional: vertically center
        bgcolor: '#f8f3f2',
        px: 2,
        py: 4,
        textAlign: 'center',
        // border: '2px dashed red', // debug only
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h3'}
        sx={{
          fontFamily: '"Playfair Display", serif',
          color: '#223d3c',
          mb: 3,
        }}
      >
        My Resume
      </Typography>

      <Paper
        elevation={6}
        sx={{
          width: '90%',
          maxWidth: '850px',
          aspectRatio: '8.5 / 11',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '2px solid #223d3c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
        }}
      >
        <Box
          component="img"
          src="/Copy of Tiifany's Resume.pdf (4).jpg"
          alt="Tiffany Halsell Resume"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Paper>
    </Box>
  );
};

export default Resume;
