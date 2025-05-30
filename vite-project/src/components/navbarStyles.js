

const styles = {
  wrapper: {
    width: '100%',
    py: 4,
  },
  box: (index) => ({
    width: '100%',
    textAlign: 'center',
    borderRadius: 2,
    px: 2,
    py: 1,
    animation: 'fadeSlideIn 0.5s ease both',
    animationDelay: `${index * 0.15}s`,
  }),
  link: (isActive) => ({
    color: isActive ? '#f8f3f2' : '#fff',
    fontWeight: isActive ? 'bold' : 'normal',
    fontSize: '1.5rem',
    display: 'block',
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    opacity: 0.85,
    '&:hover': {
      transform: 'scale(1.15)',
      opacity: 1,
    },
  }),
};

export default styles;
