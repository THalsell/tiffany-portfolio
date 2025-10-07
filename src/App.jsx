import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Box>
      {!isHome && <Footer />}
    </Box>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
