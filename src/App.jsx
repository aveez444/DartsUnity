
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GDPR from './pages/GDPR';
import ScrollToTop from './components/ScrollToTop';
import Info from './pages/Information';
import CCPA from './pages/CCPA';
import CASL from './pages/CASL';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
       <ScrollToTop /> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/GDPR" element={<GDPR />} />
          <Route path="/DoNotSellMyPersonalInformation" element={<Info />} />
          <Route path="/CCPA" element={<CCPA />} />
          <Route path="/CASL" element={<CASL />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;