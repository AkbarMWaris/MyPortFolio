import { BrowserRouter as Router, Routes, Route, useEffect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    // Initialize theme from localStorage on page load
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  return (
    <Router>
      <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <Navbar />
        <div className="max-w-6xl mx-auto">
          <main className="pt-16">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              } />
            </Routes>
          </main>
        </div>
        <Footer />
        <Toaster
          toastOptions={{
            style: {
              background: '#10141d',
              color: '#ccd6e4',
              border: '1px solid #2a3346',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
