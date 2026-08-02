import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="floral-border-left"></div>
      <div className="floral-border-right"></div>
      
      <div className="app-content">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
