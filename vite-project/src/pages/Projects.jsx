import { Box, Typography, Card, CardContent, CardMedia, Grid, Chip, Button } from '@mui/material';

const projects = [
  {
    title: 'Car Dealership App',
    image: '/assets/car-app.png',
    description: 'A React app displaying a list of cars with details, search, and routing.',
    tech: ['React', 'Material UI'], // ✅ add tech
    link: 'https://github.com/THalsell/car-dealer', // ✅ optional but prevents error
  },
  {
    title: 'Random Joke Generator',
    image: '/assets/random-joke.png',
    description: 'A simple app that fetches and displays a random joke from an API.',
    tech: ['JavaScript', 'API'],
    link: 'https://your-random-joke-deploy-url.com',
  },
  {
    title: 'BlackJack Game',
    image: '/src/assets/blackJack.png',
    description: 'A browser-based BlackJack game built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://thalsell.github.io/blackJack/',
  },
];

const Projects = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f8f3f2', minHeight: '100vh' }}>
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ fontFamily: '"Playfair Display", serif', color: '#223d3c', mb: 4 }}
      >
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>

                {project.tech && (
                  <Box mt={2}>
                    {project.tech.map((item) => (
                      <Chip key={item} label={item} size="small" sx={{ mr: 1 }} />
                    ))}
                  </Box>
                )}

                {project.link && (
                  <Button
                    href={project.link}
                    target="_blank"
                    sx={{ mt: 2, textTransform: 'none' }}
                  >
                    View Project
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
