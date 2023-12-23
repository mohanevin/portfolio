
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme } from './utils/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
  background-color:${({ theme }) => theme.bg};
  width:100%;
  overflow-x:hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
