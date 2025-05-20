import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeatureSection from './components/FeatureSection';
import ContactSection from './components/ContactSection';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: ${props => props.theme.fonts.main};
`;

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
function App() {
  // ... existing code ...
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar setShowLogin={setShowLogin} />
      <HeroSection setShowSignup={setShowSignup} />
      <AboutSection />
      <FeatureSection />
      <ContactSection />
      <Footer />
      {/* Modals */}
    </AppContainer>
  );
}
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar setShowLogin={setShowLogin} />
      <HeroSection setShowSignup={setShowSignup} />
      <AboutSection />
      <FeatureSection />
      <ContactSection />
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          setShowSignup={setShowSignup}
        />
      )}
      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          setShowLogin={setShowLogin}
        />
      )}
    </AppContainer>
  );
}

export default App;