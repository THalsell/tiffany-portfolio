/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiChartdotjs,
  SiShopify,
  SiGraphql,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiMui,
} from 'react-icons/si';
import floralAboutBG from '../assets/floralAboutBG.png';

// Floating animation
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Fade in and scale up
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Pulse animation
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const skillsData = {
  Frontend: [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Material-UI', icon: <SiMui />, color: '#007FFF' },
  ],
  Backend: [
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
  ],
  'Tools & Technologies': [
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'npm', icon: <SiNpm />, color: '#CB3837' },
    { name: 'Chart.js', icon: <SiChartdotjs />, color: '#FF6384' },
    { name: 'Shopify', icon: <SiShopify />, color: '#7AB55C' },
  ],
};

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${floralAboutBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: 6,
        px: 3,
      }}
    >
      {/* Page Title */}
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        textAlign="center"
        data-aos="fade-down"
        sx={{
          fontFamily: '"Playfair Display", serif',
          color: '#8B5E3C',
          mb: 6,
        }}
      >
        Skills & Technologies
      </Typography>

      {/* Skills Categories */}
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {Object.entries(skillsData).map(([category, skills], catIndex) => (
          <Box key={category} sx={{ mb: 6 }}>
            {/* Category Title */}
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              data-aos="fade-right"
              data-aos-delay={catIndex * 100}
              sx={{
                fontFamily: '"Playfair Display", serif',
                color: '#8B5E3C',
                mb: 3,
                textAlign: 'center',
              }}
            >
              {category}
            </Typography>

            {/* Skills Grid */}
            <Grid container spacing={4} justifyContent="center">
              {skills.map((skill, index) => (
                <Grid item xs={4} sm={3} md={2} key={skill.name}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.5,
                      cursor: 'pointer',
                      animation: `${fadeInScale} 0.6s ease forwards`,
                      animationDelay: `${index * 0.05}s`,
                      opacity: 0,
                      '&:hover .skill-icon': {
                        animation: `${pulse} 0.6s ease infinite`,
                        transform: 'rotate(360deg)',
                        color: skill.color,
                      },
                      '&:hover .skill-name': {
                        color: skill.color,
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      className="skill-icon"
                      sx={{
                        fontSize: isMobile ? '3.5rem' : '5rem',
                        color: skill.color,
                        transition: 'all 0.5s ease',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                      }}
                    >
                      {skill.icon}
                    </Box>

                    {/* Skill Name */}
                    <Typography
                      className="skill-name"
                      variant="body2"
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        color: '#5E453B',
                        textAlign: 'center',
                        fontSize: isMobile ? '0.75rem' : '0.9rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
