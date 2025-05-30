import { Box, Typography, Paper } from '@mui/material';

const Resume = () => {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: '#f8f3f2',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Playfair Display", serif',
          color: '#223d3c',
        }}
      >
        My Resume
      </Typography>

      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: '850px',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '2px solid #223d3c',
        }}
      >
        <Box
          component="img"
          src="/Copy of Tiifany's Resume.pdf (4).jpg"
          alt="Tiffany Halsell Resume"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </Paper>
    </Box>
  );
};

export default Resume;