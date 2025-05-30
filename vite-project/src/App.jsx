import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        {/* Main content scrolls */}
        <Box sx={{ flex: 1, overflowY: 'auto', bgcolor: '#f8f3f2' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Box>

        {/* Right-side navbar */}
        <Box sx={{ width: '200px', bgcolor: '#223d3c', display: 'flex', justifyContent: 'center' }}>
          <Navbar />
        </Box>
      </Box>
    </Router>
  );
};

export default App;