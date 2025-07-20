import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
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
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiChartdotjs,
} from 'react-icons/si';
import projectsFloralBg from '../assets/projectsFloralBg.png';

// Icon lookup - Added new icons for Recovery Companion
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
  // New icons for Recovery Companion
  'Next.js': <SiNextdotjs title="Next.js" />,
  TypeScript: <SiTypescript title="TypeScript" />,
  'Tailwind CSS': <SiTailwindcss title="Tailwind CSS" />,
  Supabase: <SiSupabase title="Supabase" />,
  Vercel: <SiVercel title="Vercel" />,
  'Chart.js': <SiChartdotjs title="Chart.js" />,
};

// Enhanced project data - All projects now have highlights and GitHub links
const projects = [
  {
    title: 'Recovery Companion',
    image: '/images/recovery_companion.png',
    description:
      'A comprehensive Progressive Web App for addiction recovery support featuring daily tracking, crisis intervention, and real-time progress analytics.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Chart.js', 'Vercel'],
    link: 'https://recovery-companion-app.vercel.app',
    github: 'https://github.com/THalsell/recovery-companion-app',
    featured: true,
    highlights: ['PWA Installation', 'Crisis Intervention', 'Real-time Data Viz', 'HIPAA-Compliant'],
  },
  {
    title: 'Car Dealership App',
    image: 'images/carapp.png',
    description:
      'A full-stack application for browsing and managing car listings with comprehensive backend API and database integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Postman'],
    github: 'https://github.com/THalsell/car-dealership-app', // Add your actual GitHub link
    highlights: ['Full-Stack', 'REST API', 'Database Integration', 'CRUD Operations'],
  },
  {
    title: 'Random Joke App',
    image: 'images/randomJoke.png',
    description: 'A fun and interactive React application that fetches and displays random jokes from a third-party API with smooth animations.',
    tech: ['React', 'API', 'Vite'],
    link: 'https://THalsell.github.io/random-joke',
    github: 'https://github.com/THalsell/random-joke', // Add your actual GitHub link
    highlights: ['API Integration', 'React Hooks', 'Responsive Design', 'Fast Loading'],
  },
  {
    title: 'BlackJack Game',
    image: 'images/blackJack.png',
    description: 'An interactive browser-based BlackJack game featuring game logic, score tracking, and engaging user interface built with vanilla JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://thalsell.github.io/blackJack/',
    github: 'https://github.com/THalsell/blackJack', // Add your actual GitHub link
    highlights: ['Game Logic', 'DOM Manipulation', 'Event Handling', 'Vanilla JS'],
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
          <Grid item key={index} xs={12} sm={6} md={project.featured ? 8 : 4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: project.featured ? 8 : 4,
                borderRadius: 3,
                overflow: 'hidden'
              }}
            >
             

              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  height: project.featured ? 300 : 400,
                  objectFit: 'contain',
                  backgroundColor: '#f5f5f5',
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                {/* Title */}
                <Typography
                  variant={project.featured ? "h5" : "h6"}
                  gutterBottom
                  sx={{ 
                    fontWeight: 600, 
                    color: '#223d3c',
                    mb: project.featured ? 2 : 1
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#555',
                    mb: project.highlights ? 2 : 0
                  }}
                >
                  {project.description}
                </Typography>

                {/* Project Highlights - Now for ALL projects */}
                {project.highlights && (
                  <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.highlights.map((highlight) => (
                      <Chip
                        key={highlight}
                        label={highlight}
                        size="small"
                        sx={{
                          backgroundColor: project.featured ? '#121211' : '#121211',
                          color: 'white',
                          fontSize: '0.7rem',
                        }}
                      />
                    ))}
                  </Box>
                )}

                {/* Technologies */}
                {project.tech && (
                  <Box mt={2} sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.tech.map((tech) => (
                      <Box
                        key={tech}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 0.5,
                          color: project.featured ? '#121211' : '#121211'
                        }}
                      >
                        {techIcons[tech]}
                        <Typography variant="caption">{tech}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Action Buttons - Enhanced for ALL projects */}
                <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {/* Live Demo Button */}
                  {project.link && (
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="contained"
                      size="small"
                      sx={{ 
                        textTransform: 'none',
                        backgroundColor: project.featured ? '#121211' : '#121211',
                        '&:hover': {
                          backgroundColor: project.featured ? '#121211' : '#121211',
                        }
                      }}
                    >
                      🚀 Live Demo
                    </Button>
                  )}
                  
                  {/* GitHub Button - Now for ALL projects */}
                  {project.github && (
                    <Button
                      href={project.github}
                      target="_blank"
                      variant="outlined"
                      size="small"
                      sx={{ 
                        textTransform: 'none',
                        borderColor: project.featured ? '#121211' : '#121211',
                        color: project.featured ? '#121211' : '#121211',
                        '&:hover': {
                          borderColor: project.featured ? '#121211' : '#121211',
                          backgroundColor: project.featured 
                            ? 'rgba(139, 94, 60, 0.04)' 
                            : 'rgba(184, 134, 11, 0.04)',
                        }
                      }}
                    >
                      📝 GitHub
                    </Button>
                  )}
                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;