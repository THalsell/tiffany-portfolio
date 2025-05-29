import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import other pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add these later */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
