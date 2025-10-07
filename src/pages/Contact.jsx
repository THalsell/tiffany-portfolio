import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import floralResumeBg from '../assets/floralResumeBg.png';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Using FormSubmit - a free form backend service
      const response = await fetch('https://formsubmit.co/ajax/tiffanyrenee100@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        })
      });

      if (response.ok) {
        setSnackbarMessage('Message sent successfully! I\'ll get back to you soon.');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSnackbarMessage('Failed to send message. Please try again or email me directly.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 4,
        backgroundImage: `url(${floralResumeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Page Title */}
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        data-aos="fade-down"
        sx={{
          fontFamily: '"Playfair Display", serif',
          color: '#8B5E3C',
          mb: 4,
          textAlign: 'center',
        }}
      >
        Let's Connect
      </Typography>

      {/* Contact Form */}
      <Paper
        elevation={6}
        data-aos="fade-up"
        data-aos-delay="200"
        sx={{
          width: '100%',
          maxWidth: 600,
          p: 4,
          borderRadius: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#5E453B',
            mb: 3,
            textAlign: 'center',
          }}
        >
          Have a project in mind or want to chat? Drop me a message below!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 2 }}
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            multiline
            rows={6}
            sx={{ mb: 3 }}
            variant="outlined"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            endIcon={<Send />}
            sx={{
              backgroundColor: '#8B5E3C',
              color: 'white',
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#6B4A30',
              },
            }}
          >
            Send Message
          </Button>
        </form>

        {/* Alternative Contact Info */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#5E453B' }}>
            Or email me directly at{' '}
            <a
              href="mailto:tiffanyrenee100@gmail.com"
              style={{ color: '#8B5E3C', textDecoration: 'none', fontWeight: 600 }}
            >
              tiffanyrenee100@gmail.com
            </a>
          </Typography>
        </Box>
      </Paper>

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
