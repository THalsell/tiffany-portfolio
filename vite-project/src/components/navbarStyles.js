const styles = {
  // Wrapper for the vertical nav
  wrapper: {
    position: 'fixed',
    top: '50%',
    right: '24px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 1000,
    gap: '75px',
  },

  // Animation box for each link
  box: (index) => ({
    textAlign: 'right',
    borderRadius: '8px',
    padding: '6px 12px',
    animation: 'fadeSlideIn 0.5s ease both',
    animationDelay: `${index * 0.15}s`,
  }),

  // Link styling with active and hover effects
  link: (isActive) => ({
    fontFamily: '"Playfair Display", serif',
    fontSize: '2rem',
    color: isActive ? '#A9745A' : '#8B5E3C',
    fontWeight: isActive ? 700 : 600,
    textDecoration: 'none',
    opacity: 0.9,
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#A9745A',
      opacity: 1,
    },
  }),
};

export default styles;
