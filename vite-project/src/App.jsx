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
      <Box
        sx={{
          display: 'flex',
          height: '100vh', // ✅ not just minHeight
          overflow: 'hidden', // ✅ cuts off anything outside viewport
        }}
      >
        {/* 🟦 Page Content */}
        <Box
          sx={{
            flex: 1,
            bgcolor: '#f8f3f2',
            overflowY: 'auto', // ✅ allows scrolling if needed
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Box>

        {/* 🟩 Right Sidebar Navbar */}
        <Box
          sx={{
            width: '200px',
            bgcolor: '#223d3c',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Navbar />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
