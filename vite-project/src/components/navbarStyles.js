
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
  fontFamily: '"Ms Madi", cursive', // 👈 Change to your preferred font
  color: isActive ? '#A9745A' : '#8B5E3C', // 👈 Custom colors
  fontSize: '1.4rem',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  opacity: 0.9,
  transition: 'transform 0.3s ease, color 0.3s ease',

  '&:hover': {
    transform: 'scale(1.1)',
    color: '#A9745A', // 👈 Hover color
    opacity: 1,
  },
}),

};

export default styles;
