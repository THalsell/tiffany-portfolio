import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from '@mui/material';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiApollographql,
} from 'react-icons/si';
import projectsFloralBg from '../assets/projectsFloralBg.png';


// Icon lookup
const techIcons = {
  React: <SiReact title="React" />,
  'Node.js': <SiNodedotjs title="Node.js" />,
  Express: <SiExpress title="Express" />,
  MongoDB: <SiMongodb title="MongoDB" />,
  Postman: <SiPostman title="Postman" />,
  JavaScript: <SiJavascript title="JavaScript" />,
  HTML: <SiHtml5 title="HTML" />,
  CSS: <SiCss3 title="CSS" />,
  Vite: <SiVite title="Vite" />,
  API: <SiApollographql title="API" />,
};

// Project data
const projects = [
  {
    title: 'Car Dealership App',
    image: 'public/carapp.png',
    description:
      'A full-stack app for viewing car listings. Includes backend API and database integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Postman'],
  },
  {
    title: 'Random Joke App',
    image: 'public/randomJoke.png',
    description: 'A fun React app that fetches and displays a random joke from an API.',
    tech: ['React', 'API', 'Vite'],
    link: 'https://THalsell.github.io/random-joke',
  },
  {
    title: 'BlackJack Game',
    image: 'public/blackJack.png',
    description: 'A browser-based BlackJack game built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://thalsell.github.io/blackJack/',
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        p: 4,
        minHeight: '100vh',
        backgroundImage: `url(${projectsFloralBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontFamily: '"Playfair Display", serif',
          color: '#8B5E3C',
          mb: 6,
        }}
      >
        Projects
      </Typography>

      {/* Project Cards */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 4,
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  height: 400,
                  objectFit: 'contain',
                  backgroundColor: '#f5f5f5',
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                {/* Title */}
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: '#223d3c' }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {project.description}
                </Typography>

                {/* Technologies */}
                {project.tech && (
                  <Box mt={2} sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.tech.map((tech) => (
                      <Box
                        key={tech}
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        {techIcons[tech]}
                        <Typography variant="caption">{tech}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* External Link */}
                {project.link && (
                  <Button
                    href={project.link}
                    target="_blank"
                    variant="outlined"
                    size="small"
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
